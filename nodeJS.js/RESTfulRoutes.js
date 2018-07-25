——————  4 Types of Requests ——————

link: https://www.codecademy.com/articles/what-is-crud

GET (Read) = asking for information. Browser is asking for information.

POST (Create) = sending information to the server.

PUT/PATCH (Update) = when a client is making a request to update a resource.

DELETE (Delete) = when a client is asking to delete a resource


The methodOverride() middleware is for requests from clients that only natively support simple verbs like GET and POST. So in those cases you could specify a special query field (or a hidden form field for example) that indicates the real verb to use instead of what was originally sent.

That way your backend .put()/.delete()/.patch()/etc. routes do not have to change and will still work and you can accept requests from all kinds of clients.


Examples:

<form action="/events/<%=event.id%>?_method=PUT" method="POST">
<form  action="/authors/<%=author.id%>?_method=DELETE" method="POST">

Explanation: You need the ?_method= if it is put, patch, or delete. Then the second method is POST.

Does it need to be capitalized?
