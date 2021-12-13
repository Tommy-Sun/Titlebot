Title Bot

It is recommended to use a virtual environment whenever you run django for dependency management purposes. To do so please "cd" to the root of the project and run "pip install virtualenv" and then run "virtualenv -p python3 venv". On Mac, you can activate the virtual environment by running, ". venv/bin/activate". 

To download dependencies:
    1. From the root of the project, run, "pip install -r . requirements.txt" 
    2. Run, "cd frontend"
    3. Run, "npm install"

To run in development mode:
    1. From the root of the project, run, "cd frontend"
    2. Run, "npm run dev"
    3. Run, "cd .."
    4. Run, "python3 manage.py runserver"
    5. Open "http://127.0.0.1:8000/" in a modern web browser.