
.MAP()

//REASON: you put two arrays together so you dont get an array within an array. Its like concatenate. You can think of map() as a for loop, that is specifically for transforming values.

//SYNTAX: (val, index)
//val — the current value being processed
//index — the current index of the value being processed


EXAMPLE 1:
const numbers = [1,2,3];

const doubleNumbers = numbers.map((num) => {
  return num * 2
});
console.log(num); //[1,2,3]
console.log(doubleNumbers); //[2,4,6]


EXAMPLE 2:
class SearchForSong extends Component {
render(){
      // console.log(this.props, 'search props')
      const searchRender = this.props.searchResults.map((track, index) => {
        const artistName = track.artists[0].name; //variable for your data.
        const songName = track.name;
        const link = track.uri;  //href not external link.
        const image = track.album.images[2].url;


//searchRender is getting all this data. THEN you will actually render this out on the last return. This return is for the mapped data. This is the new array.

        return (
          <div key={index}> 
            <h3> {songName} by {artistName} </h3>
            <img src={image} className="spotifyImg" />

            <form onSubmit={this.props.addSongHandler.bind(null,link)}>
              <input type='submit' value='add to playlist'/>
            </form>
          </div>
        )





https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783
https://hackernoon.com/using-javascripts-map-function-e0245b97d5ea
