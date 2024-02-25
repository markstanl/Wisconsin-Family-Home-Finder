# gunicorn_config.py

import multiprocessing

# Number of worker processes
workers = multiprocessing.cpu_count() * 2 + 1

# Bind to the specified host and port
bind = '0.0.0.0:5000'

# Log to stdout
accesslog = '-'
errorlog = '-'

# Set the maximum number of simultaneous clients that a single process can handle
worker_connections = 1000

# Enable the 'preload' option to load application code before forking worker processes
preload_app = True

# Set environment variables
raw_env = [
    'FLASK_ENV=production',
    'SECRET_KEY=your_secret_key_here'  # Replace with your actual secret key
]

# Import the Flask application
from app import app
