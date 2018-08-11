

#1 TRYING TO RENDER AN IMAGE ON THE PAGE

ERROR
Objects are not valid as a React child (found: object with keys {height, url, width}). If you meant to render a collection of children, use an array instead.
    in div (at index.js:51)
    in div (at index.js:71)
    in SearchForSong (at index.js:72)

SOLUTION
return (
  <div>
    <h3> {songName} by {artistName} </h3>

    PROBLEM...
    {image}
    
    SOLUTION...
    <img src = {image} className="spotifyImg" alt="Spotify image"/>

    <form>
      <input type='submit' value='add'/>
    </form>
  </div>
