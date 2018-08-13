
================== DEFINITION ===============
Django - framework with ready-made components.

When a request comes to a web server, it's passed to Django which tries to figure out what is actually requested. It takes a web page address first and tries to figure out what to do.

This part is done by Django's urlresolver (note that a website address is called a URL – Uniform Resource Locator – so the name urlresolver makes sense). It is not very smart – it takes a list of patterns and tries to match the URL. Django checks patterns from top to bottom and if something is matched, then Django passes the request to the associated function (which is called view).


In the view function, all the interesting things are done: we can look at a database to look for some information. Maybe the user asked to change something in the data? Like a letter saying, "Please change the description of my job." The view can check if you are allowed to do that, then update the job description for you and send back a message: "Done!" Then the view generates a response and Django can send it to the user's web browser.



================== VIRTUAL ENVIRONMENT ===============
So, let's create a virtual environment (also called a virtualenv).

Virtualenv will isolate your Python/Django setup on a per-project basis. This means that any changes you make to one website won't affect any others you're also developing.


HOW TO:
1. Find a directory in which you want to create the virtualenv; your home directory, for example. On Windows, it might look like #C:\Users\Name\ (where Name is the name of your login).

2. In the terminal: python3 -m venv myvenv

3. For Mac: type in: source sourcename/bin/active #sourcename is your source name. in this case it is myenv.

#ALSO, use this for when you get your server running and you tab over in your terminal. then just type source myenv/bin/activate.

example...
django_intro.py	myvenv  #notice the myenv part.
Chriss-MacBook-Air:django-intro chris$ source myvenv/bin/activate
(myvenv) Chriss-MacBook-Air:django-intro chris$


NOTE: You will know that you have virtualenv started when you see that the prompt in your console is prefixed with (myvenv).

NOTE: When working within a virtual environment, python will automatically refer to the correct version so you can use python instead of python3.


================== INSTALL DJANGO ===============

To install...

1. make sure we have the latest version of pip, the software that we use to install Django:

command-line
in the folder you're in: python3 -m pip install --upgrade pip

example response:
Installing collected packages: pip
  Found existing installation: pip 10.0.1
    Uninstalling pip-10.0.1:
      Successfully uninstalled pip-10.0.1
Successfully installed pip-18.0


2. Create a requirements.txt file inside the folder everything is in.

requirements.txt file you should add the following text:
Django~=2.0.6

3. Now, run pip install -r requirements.txt to install Django.

example response...

(myvenv) ~$ pip install -r requirements.txt
Collecting Django~=2.0.6 (from -r requirements.txt (line 1))
  Downloading Django-2.0.6-py3-none-any.whl (7.1MB)
Installing collected packages: Django
Successfully installed Django-2.0.6


============== REMEMBER ==================

When working on your django file:

run everything in the virtualenv. If you don't see a prefix (myvenv) in your console, you need to activate your virtualenv. Typing source myvenv/bin/activate on Mac OS X or Linux will do this for you.


============= CHANGE SOME SETTINGS ===========

NOTE: Our tutorial had us change settings. Link is here: https://tutorial.djangogirls.org/en/django_start_project/#changing-settings


============ STARTING A PROJECT ==========


django-admin startproject mysite .

Now, you have a bunch of files. For example in mysite folder you have, among other things:

1. manage.py is a script that helps with management of the site. With it we will be able (amongst other things) to start a web server on our computer without installing anything else.

2. The settings.py file contains the configuration of your website.

3.  urls.py file contains a list of patterns used by urlresolver.


============ STARTING YOUR DATABASE =========

default database is sqlite3.

This is already set up in this part of your mysite/settings.py file:

mysite/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


To create a database for our blog, let's run the following in the console: python manage.py migrate (we need to be in the main directory that contains the manage.py file). If that goes well, you should see something like this:

command-line
(myvenv) ~/djangogirls$ python manage.py migrate
Operations to perform:
  Apply all migrations: auth, admin, contenttypes, sessions
Running migrations:
  Rendering model states... DONE
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying sessions.0001_initial... OK




============= STARTING YOUR SERVER ==========

Be in your main folder. Then in your terminal...
python manage.py runserver


For this tutorial the browser is here: http://127.0.0.1:8000/



============= ADDING MODELS TO YOUR DB ===========

Once, you have added a model, you have to make Django know that we have some changes in our model. Go to your console window and type python manage.py makemigrations blog. It will look like this:

python manage.py makemigrations blog
Migrations for 'blog':
  blog/migrations/0001_initial.py:
  - Create model Post


============= IMPORTANT ===========

This next part I don't get....
https://tutorial.djangogirls.org/en/django_models/#create-tables-for-models-in-your-database

Django prepared a migration file for us that we now have to apply to our database. Type python manage.py migrate blog and the output should be as follows:

command-line
(myvenv) ~/djangogirls$ python manage.py migrate blog
Operations to perform:
  Apply all migrations: blog
Running migrations:
  Rendering model states... DONE
  Applying blog.0001_initial... OK
Hurray! Our Post model is now in our database! It would be nice to see it, right? Jump to the next chapter to see what your Post looks like!
