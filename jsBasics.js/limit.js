#1 .limit()

Set the maximum number of records to retrieve when executing a query instance.

.limit(maximum)
Usage
#
Argument	Type	Details
1	maximum	Number	The maximum number of records to retrieve.
Example
#
To retrieve records for up to 10 users named Jake:

var jakes = await User.find({ name: 'Jake' });
.limit(10);

return res.json(jakes);
Notes
#
If you set the limit to 0, the query will always return an empty array.
If the limit is greater than the number of records matching the query criteria, all of the matching records will be returned.
The .find() method returns a chainable object if you don't supply a callback. This method can be chained to .find() to further filter your results.


____________________________________________________________________________

#2 in a fetch call in React, put it at the end of your fetch request.

example...

const searchData = await fetch(`https://api.spotify.com/v1/search?q=${track} ${artist}&type=track&limit=10`, {
  headers: {'Authorization': 'Bearer ' + this.props.access_token, "Accept": "application/json","Content-Type": "application/json"
}
