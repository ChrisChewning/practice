TO SETUP IN REACT:

1. npm install --save react bootstrap

2. In index.js import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

3. In app.js (so it can be accessed by all your components)
import 'bootstrap/dist/css/bootstrap.css'

Find your div or whatever you want to style and in className type in what you want. example...


render() {
  console.log(this.state);
  return (
    <div className="app">
      <div className="mapContainer col-sm-3 col-md-4 col-lg-6">   {/* container for map to sit in. */}
        < MapContainer quake={this.state.quakes}/>   {/* actual map */}
        {/* < Marker /> */}
      </div>

      <div className="quakeContainer col-sm-7 col-md-4 col-lg-6">   {/* container for list to sit in. */}
        <h1>Earthquakes from the past week: </h1>
        < Quakes quakes={this.state.quakes} /> {/* list of quakes */}
{/* we are passing the whole quakes data (this.state.quakes) to the Quakes component's. We are giving it a property of quakes. */}
      </div>
    </div>
  );
}


4. SIZES: Unless noted, whatever you put is for that size and up. example...

<div className="mapContainer col-md-4"> would be set to md, lg, and x-l.

5. TO TEST: Use the Google Add-On Breakpoint Tester

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) ADD-ON SETS TO 480.
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) MED
// Large devices (desktops, 992px and up)
@media (min-width: 992px) LARGE
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) X-LARGE
