# import urllib, os
from tqdm import tqdm
import urllib.request as ur
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
    with TqdmUpTo(unit='B', unit_scale=True, unit_divisor=1024, miniters=1,
                  desc=url.split('/')[-1]) as t:  # all optional kwargs
        ur.urlretrieve(url, filename=local_path,
                                   reporthook=t.update_to, data=None)
        t.total = t.n