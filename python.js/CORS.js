CORS - Cross-Origin Resource Sharing

* Allows cross-domain communcation from the browser. Allows devs to work w the same idioms as same-domain requests.

* For me, the front-end React is wanting the back-end Django information but the back-end needs to say React (localhost://3000)

* This is a 4-step process.

//==========================================================================

STEP 1:  Put it in your installed apps. 'corsheaders',

INSTALLED_APPS = [
    'django.contrib.admin',
  ...
    'rest_framework',
    'corsheaders',
    'showtime',
]

// ==========================================================================
STEP 2: PUT IT IN YOUR MIDDLEWARE
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    // new. put this first. this is what you're using for your requests.
]

// ==========================================================================

STEP 3: Make sure your
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000/',
    # 'https://tastedive.com/api/similar?k=317664-westwing-GQQG6YPC&q=west+wing&limit=5'
)

// ==========================================================================
STEP 4: Make sure you set CORS_ORIGIN_ALLOW_ALL to True (capital T). You need this to allow the whitelist.

CORS_ORIGIN_ALLOW_ALL = True


// ==========================================================================
//THERE'S ALSO THIS but I'm not sure wht this was for...
# CORS_ALLOW_CREDENTIALS = True
