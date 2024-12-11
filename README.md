# Personal Website

This is the source code for my personal website. It is built using [Django](https://www.djangoproject.com/).

## Installation

1. Clone the repository
    
    ```shell
    git clone github.com:akhmadqasim/website.git
    ```
   
2. Install the requirements

    ```shell
    pip install -r requirements.txt
    ```
   
3. Run the server

    ```shell
    python manage.py runserver
    ```
   
4. Modify or create .env file

    ```shell
    SECRET_KEY=your_secret_key
    DEBUG=True
    ALLOWED_HOSTS=yourdomain.com, localhost
   
    DB_ENGINE=django.db.backends.mysql
    DB_NAME=your_db_name
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    ```
   
5. Migrate the database

    ```shell
    python manage.py makemigrations
    python manage.py migrate
    ```
   
6. Create superuser (optional)

    ```shell
    python manage.py createsuperuser
    ```
   
7. Run the server

    ```shell
    python manage.py runserver
    ```
   
8. Open the browser and go to `localhost:8000`
9. Done!

## What is inside this project?

1. Blog - Is a module to manage blog posts
2. User - Is a module to manage user profile
3. Website - Is a module to manage website content

Tree structure:

```text
.
├── blog
│   ├── admin.py # Admin configuration for Django admin
│   ├── api.py # API configuration for Django REST framework
│   ├── apps.py # App configuration for Django
│   ├── forms.py # Form configuration for Django
│   ├── models.py # Model configuration for Django
│   ├── serializers.py # Serializer configuration for Django REST framework
│   ├── tests.py # Test configuration for Django
│   ├── urls.py # URL configuration for Django
│   └── views.py # View configuration for Django
├── users
│   ├── admin.py # Admin configuration for Django admin
│   ├── apps.py # App configuration for Django
│   ├── crons.py # Cron configuration for Django
│   ├── forms.py # Form configuration for Django
│   ├── models.py # Model configuration for Django
│   ├── tests.py # Test configuration for Django
│   ├── urls.py # URL configuration for Django
│   └── views.py # View configuration for Django
├── website # Main module
│   ├── asgi.py # ASGI configuration for Django
│   ├── authentification.py # Authentification configuration for Django
│   ├── settings.py # Settings configuration for Django
│   ├── urls.py # URL configuration for Django
│   ├── views.py # View configuration for Django
│   └── wsgi.py # WSGI configuration for Django
├── docker-compose.yml # Docker compose configuration
├── Dockerfile # Docker configuration
├── manage.py # Django management
├── README.md # Readme file
├── requirements.txt # Requirements file
└── .env # Environment file
```