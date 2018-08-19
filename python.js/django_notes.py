URLS
#============================= VIEWS ==========================
A view is a place where we put the "logic" of our application. It will request information from the model you created before and pass it to a template. We'll create a template in the next chapter. Views are just Python functions that are a little bit more complicated than the ones we wrote in the Introduction to Python chapter.

#======== Views is like your controllers in Express.

# Artist Edit
def artist_edit(request, pk): #function named artist_edit with request in it.
  artist = Artist.objects.get(pk=pk) #same as id=id
  if request.method == 'POST':
    form = ArtistForm(request.POST, instance=artist)  #instance = whatever instance of the model you are implementing. when you are using a form, you can use instance.

    if form.is_valid():
      artist = form.save()
      return redirect('artist_detail', pk=artist.pk)
  else:
    form = ArtistForm(instance=artist)
  return render(request, 'tunr/artist_form.html', {'form': form}) # {} injects data.



#============================= FOLDER STRUCTURE ==========================

For our project, we will have 'tunr' and 'tunr_django'. 'tunr' is the backend of our application. 'tunr_django' is for the backend of our application. they
are sibling folders. You also have manage.py as a sibling file and requirements.txt as a sibling file.



#========================  RUN YOUR VIRTUAL ENVIRONMENT ==================

*NOTE: If you run your server from another terminal tab after setup, set up your virtual environment again, then install pip3 install django and pip3 install psycopg2.

STEP 1: VIRTUAL ENVIRONMENT
source .env/bin/activate in your main root folder. THIS IS IMPORTANT.

STEP 2: INSTALLS
example...
pip3 install django
pip3 install psycopg2

example...
 pip install djangorestframework
pip freeze > requirements.txt

STEP 3: Put it in your requirements.tx
pip3 freeze > requirements.txt  #puts any requirements in your requirements.txt

STEP 4: Go to your settings.py to INSTALLED_APPS and add it their.
example...
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tunr',
    'rest_framework'
]


#========================  IF WORKING WITH REST_FRAMEWORK  ==================

in settings.py you can add things to your REST_FRAMEWORK if you are working with that.

example...

REST_FRAMEWORK = {  #creates an endpoint. sets up authentication.

##allows read-only access for unathenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
    'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    #'rest_framework.permissions.AllowAny' is another one you could use.
    ]
}



#==============================   YOUR DATABSE   ==========================
#goals: create db in psql, a user to act on that databse, and gave that user the ability to anything they want with the database.

by default, django is set up with mysql. we'll use PostgreSQL so psql.

1. go into the psql shell by typing psql in your terminal and create your databse.

ex: $ psql
> CREATE DATABASE tunr;
> CREATE USER tunruser WITH PASSWORD 'tunr';
GRANT ALL PRIVILEGES ON DATABASE tunr TO tunruser;
> \q

2. Set up your database. Make sure your default engine is postgres (.postgresql) and the ability to talk to postgres through python (_psycopg2)
example...
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'tunr',
        'USER': 'tunruser', #could be anyhting.
        'PASSWORD': 'tunr',
        'HOST': 'localhost'
    }
}

3. find the database dictionary and edit it.
4. Include your app in the INSTALLED_APPS


example...

postgres=# \q  (\q quits your sql)
Chriss-MacBook-Air:showtime_django chris$ psql  #(gets into your sql)

chris=# \c showtime  (connects to your database now)
You are now connected to database "showtime" as user "chris".
showtime=# \dt  (shows your tables)
                     List of relations
 Schema |            Name            | Type  |    Owner
--------+----------------------------+-------+--------------
 public | auth_group                 | table | showtimeuser
 public | auth_group_permissions     | table | showtimeuser
 public | auth_permission            | table | showtimeuser
 public | auth_user                  | table | showtimeuser
 public | auth_user_groups           | table | showtimeuser
 public | auth_user_user_permissions | table | showtimeuser
 public | django_admin_log           | table | showtimeuser
 public | django_content_type        | table | showtimeuser
 public | django_migrations          | table | showtimeuser
 public | django_session             | table | showtimeuser
 public | showtime_actor             | table | showtimeuser
 public | showtime_show              | table | showtimeuser
(12 rows)

showtime=#







#==============================   RUN YOUR SERVER   ==========================

python3 manage.py runserver

#==============================   REQUIREMENTS.TXT  ==========================
this is lke our package.json


#==============================   MIGRATIONS   ==========================
Run the two commands any time we make a change to our models or add a new model, run the two commands:
    $python3 manage.py makemigrations
    $python3 manage.py migrate


it'll look at our model and make that table in sql. What is allowing us to do that is the  _psycopg2 here:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2'


2. go to where you can see the manage.py file in your terminal. This needs to be in a different terminal tab.

Run: $python3 manage.py makemigrations
You'll see: the models you created in models.py. This is the outlineself.

Run: python3 manage.py migrate commits the updates to the actual database.
You'll see: a bunch of code with OK at the end of each line.



#============================   MODELS ==========================

MODEL TYPES
https://docs.djangoproject.com/en/1.11/ref/models/fields/

PUT MODELS in same models.py folder.

example...

from django.db import models

# Create your models here. This is like our schema in express.

class Artist(models.Model):
    # 3 fields, which will be columns.you have character fields, which mean we must add an upper limit to how many characters are in the db field.
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    photo_url = models.TextField() #unlimited length

    def __str__(self):  #this is helpful for debugging.
        return self.name


class Song(models.Model): #inherit the models class
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE,
    related_name='songs')
    title = models.CharField(max_length=100) #notice its CharField not charField
    album = models.CharField(max_length=100)
    preview_url = models.TextField()

    def __str__(title):
        return title.name

    #parameter 1: the foreign key links to the artist class. creates this manually here for postgres.

    #parameter 2: on_delete=models.CASCADE  means if you delete this song database it'll delete any children related to that. Basically, if you delete an artist all of its songs (children data) will be deleted.

    #related_name is how the model will be referred to in relation to its parent (Artist)

#Let's also add the magic method __str__. This method defines what an instance of the model will show up as by default. It will be really helpful for debugging in the future!


#==================================== SUERUSER ================================

django has built in authentication out the box.

manage.py createsuperuser

write down the stuff you need to from the terminal.
my username for this one is chris
email address:
password:

you can now go to localhost:8000/admin

STEP 2: In your admin.py file, import and register.

from django.contrib import admin #should already be here.
from .models import Artist, Song #importing our two models.

# Register your models here.

admin.site.register(Artist)
admin.site.register(Song)



#=========================== App & Backend Explained ========================
App: tunr
Backend: tunr_django

ORM: Object-role model. Often used for data modeling and software engineering. It uses graphical symbols that are based on first order predicate logic and set theory to enable the modeler to create an unambiguous definition of an arbitrary universe of discourse.


In our urls we created our admin.

The model is what talks to the databse.
makemigrations
migrate: puts it into sql.


#================================ pk vs id ============================

in sql each entry gets a primary key. Sql is like an excel spreadsheet. each row gets a key. when you put stuff in mongo, it automatically gets an id. In sql the convention is sql.



#=============================== TEMPLATES =============================


{% extends 'tunr/base.html' %}  #this part is for a header. could be named anything.

{% block content %} #this is where the code starts
<h2>{{ artist.name }} <a href="{% url 'artist_edit' pk=artist.pk %}">(edit)</a></h2>
<h4>{{ artist.nationality }}</h4>

<img src="{{ artist.photo_url }}" alt="" class="artist-photo">

<h3>Songs <a href="{% url 'song_create' %}">(+)</a></h3>
<ul>
    {% for song in artist.songs.all %} #this is where your loop starts.
        <li>
            <a href="{% url 'song_detail' id=song.id %}">{{ song.title }}-{{ song.album }}</a>
        </li>
    {% endfor %} #loop ends.
</ul>
{% endblock %}

#=============================== FORMS =============================

To create a form it is a 3-step process

1. CREATE YOUR MODEL
# in models.py
from django.db import models

class Artist(models.Model):  #models is referring to something built into django.  .Model is a property of models. Justl like .CharField & .TextField.
    name = models.CharField(max_length=100)
    photo_url = models.TextField()
    nationality = models.CharField(max_length=100)
    #nationality = models.CharField(max_length=100, blank=true)


2. CREATE THE FORM
# in forms.py
from django import forms  #built into django
from .models import Artist, Song  #import from models.py

class ArtistForm(forms.ModelForm):  #forms is something in django. It has the property ModelForm
  class Meta:
    model = Artist
    fields = ('name', 'nationality', 'photo_url')

# the fields = ('',) part is called a tuple. The fields are immutable and it is in an array even though it doesn't look like it.


3. PUT THE FORM IN A TEMPLATE
# in artist_list.html
{% extends 'tunr/base.html' %} #this was something we kept including in our templates. it is sort of like a header partial in ejs.

{% block content %}
    <h1>New Song</h1>
    <form method="POST" class="song-form">  #form method is post for forms.
        {% csrf_token %} #this is built into django and gets passed back and forth for authentication.
        {{ form.as_p }}  #form is your form.  as_p is built-in styling.
        <button type="submit" class="save btn btn-default">Save</button>
    </form>
{% endblock %}




#=============================== AUTH =============================

- django has authentication built right out the box. no need for bcrypt.
- we alrady have an admin part of our application.



#=============================== STYLING =============================
1. Put a CSS file in a static folder.  static/tunr.css for example.

2. In base.html, inside your head tags, put your links just like you did in css, except this time it's href="{ static 'css/tunr.css' %}"
NOTE: This is why you put {% extends 'tunr/base.html' %} in your other templates.

example...

{% load staticfiles %}
<html>
    <head>
        <title>Tunr</title>
        <link rel="stylesheet" href="{% static 'css/tunr.css' %}">
    </head>
    <body>
        <h1>Tun.r</h1>
        <nav>
            <a href="/songs">Songs</a>
            <a href="/">Artists</a>
        </nav>
        {% block content %}
        {% endblock %}
    </body>
</html>
