CURL=curl
GREP=grep

README_TMP=readme.html
# change those for your project
USER=teebid
REPO=aicure_opendbm

.PHONY: purge

purge:
	$(CURL) -s -X PURGE https://github.com/teebid/aicure_opendbm/blob/master/images/badges/linux_status.svg
	$(CURL) -s -X PURGE https://github.com/teebid/aicure_opendbm/blob/master/images/badges/macos_status.svg
	$(CURL) -s -X PURGE https://github.com/teebid/aicure_opendbm/blob/master/images/badges/windows_status.svg