# Title Bot

Hello! I used React.js for the frontend and Django for the backend. The backend has an api app and makes use of django's relational database. That way, all changes are saved permenantly. Additionally, the added bonus feature on this app is a "favorites" attribute of each title. Favoriting any title will add it to the Favorites list. 

It is recommended to use a virtual environment whenever you run django for dependency management purposes. To do so please "cd" to the root of the project and run "pip install virtualenv" and then run "virtualenv -p python3 venv". On Mac, you can activate the virtual environment by running, ". venv/bin/activate". 

#### To download dependencies:
1. From the root of the project (path/to/Titlebot), run, "pip install -r ./requirements.txt" 
2. Run, "cd frontend"
3. Run, "npm install"

#### To run in development mode:

1. From the root of the project (path/to/Titlebot), run, "cd frontend"
2. Run, "npm run dev"
3. Open another terminal. "cd" to the root of the project again
4. Run, "python3 manage.py runserver"
5. Open "http://127.0.0.1:8000/" in a modern web browser.

#### NOTES:
1. The app's frontend components are located in [TitleBot/frontend/src/components](TitleBot/frontend/src/components)
2. The app's backend is in the API app. The main files to look at here are [TitleBot/api/views.py](TitleBot/api/views.py) and [TitleBot/api/models.py](TitleBot/api/models.py).
3. One tough problem I encountered while making this app was getting the title of a given web page's html. You can find the code in the [TitleBot/api/models.py](TitleBot/api/models.py) file.
