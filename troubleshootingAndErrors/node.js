
1. IF ROUTES DO NOT WORK
check: npm installs. (ex: express-session)
check: your app.require()s in your server.js
check your server.js designation.

ex: const authController = require('./controllers/authController');
app.use('/auth', authController)
^^ THIS SETS /auth as the beginning of every route through authController. so your routes shouldnt start in your authController with /auth or youll get /auth/auth


2. if you cannot post: (error cannot post / or cannot post /home etc.)

check: bodyparser is in json & required.
check: method-overrider is in json & required (for method: delete & others(?))
check: again the prefix in app.use is set. For example, if you are in /events/new and you want your form action to post to home you may have to put /events not / b.c of the prefix app.use sets.


<form action="/events/<%=event.id%>?_method=PUT" method="POST">
<form  action="/authors/<%=author.id%>?_method=DELETE" method="POST">

Explanation: You need the ?_method= if it is put, patch, or delete. Then the second method is POST.

3. Check capitalization, including in folder naming conventions and routing.


4. NPM INIT & Install and Main File
Check you have npm init and installed what you need.
Check your main file in json is aligned to the file you have (ex: server.js)

5. Check no other servers are running.
