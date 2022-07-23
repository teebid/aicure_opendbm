# import urllib, os
import logging
import platform
import subprocess
import tempfile
import urllib.request as ur

from tqdm import tqdm

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()


# urllib = getattr(urllib, 'request', urllib)


class TqdmUpTo(tqdm):
    """Provides `update_to(n)` which uses `tqdm.update(delta_n)`."""

    def update_to(self, b=1, bsize=1, tsize=None):
        """
        b  : int, optional
            Number of blocks transferred so far [default: 1].
        bsize  : int, optional
            Size of each block (in tqdm units) [default: 1].
        tsize  : int, optional
            Total size (in tqdm units). If [default: None] remains unchanged.
        """
        if tsize is not None:
            self.total = tsize
        return self.update(b * bsize - self.n)  # also sets self.n = b * bsize


def download_url(url, local_path):
    with TqdmUpTo(
        unit="B",
        unit_scale=True,
        unit_divisor=1024,
        miniters=1,
        desc=url.split("/")[-1],
    ) as t:  # all optional kwargs
        ur.urlretrieve(url, filename=local_path, reporthook=t.update_to, data=None)
        t.total = t.n


def wsllize(path):
    if platform.system() == "Windows":
        wsl_cmd = ["wsl"]
        path = subprocess.check_output(["wsl", "wslpath", repr(path)]).decode("utf-8")
        # path = subprocess.check_output(f"wsl wslpath '{path}'").decode("utf-8")
        if path.endswith("\n"):
            path = path[:-1]
        return wsl_cmd, path
    else:
        return [], path


def docker_command_dec(fn):
    import os

    def inner(*args, **kwargs):
        # args[1] is path argument
        wsl_cmd, path = wsllize((args[1]))

        create_docker = wsl_cmd + [
            "docker",
            "create",
            "-ti",
            "--name",
            "dbm_container",
            "dbm",
            "bash",
        ]
        # create_docker = wsl_cmd + "docker create -ti --name dbm_container dbm bash"

        copy_file_to_docker = wsl_cmd + ["docker", "cp", path, "dbm_container:/app/"]
        # copy_file_to_docker = wsl_cmd + f"docker cp {path} dbm_container:/app/"
        start_container = wsl_cmd + ["docker", "start", "dbm_container"]
        # start_container = wsl_cmd + "docker start dbm_container"
        terminate_container = wsl_cmd + ["docker", "stop", "dbm_container"]
        # terminate_container = wsl_cmd + "docker stop dbm_container"
        remove_container = wsl_cmd + ["docker", "rm", "dbm_container"]

        subprocess.Popen(
            create_docker,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()
        subprocess.Popen(
            copy_file_to_docker,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()
        subprocess.Popen(
            start_container,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()

        try:

            args = args[0], "/app/" + os.path.basename(args[1]), args[2]

            result = fn(*args, **kwargs)

            return result
        except Exception as e:

            logger.info(f"Failed: {e}")

        finally:
            # pass
            subprocess.Popen(
                terminate_container,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                stdin=subprocess.PIPE,
            ).wait()
            subprocess.Popen(
                remove_container,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                stdin=subprocess.PIPE,
            ).wait()

    return inner
