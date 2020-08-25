import os
_basedir = os.path.abspath(os.path.dirname(__file__))

DEBUG = False

THREADS_PER_PAGE = 2

# Enable protection agains *Cross-site Request Forgery (CSRF)*
CSRF_ENABLED = True
