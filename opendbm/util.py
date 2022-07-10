# import urllib, os
import logging
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


def docker_command_dec(fn):
    import os
    import subprocess

    def inner(*args, **kwargs):
        create_docker = "docker create -ti --name dbm_container dbm bash"
        copy_file_to_docker = f"docker cp {args[1]} dbm_container:/app/"
        start_container = "docker start dbm_container"
        terminate_container = "docker stop dbm_container"
        remove_container = "docker rm dbm_container"

        subprocess.Popen(create_docker, shell=True).wait()
        subprocess.Popen(copy_file_to_docker, shell=True).wait()
        subprocess.Popen(start_container, shell=True).wait()

        try:

            args = args[0], "/app/" + os.path.basename(args[1]), args[2]

            result = fn(*args, *kwargs)

            return result
        except Exception as e:

            logger.info(f"Failed: {e}")

        finally:

            subprocess.Popen(terminate_container, shell=True).wait()
            subprocess.Popen(remove_container, shell=True).wait()

    return inner
