SPREAD OPERATOR (... OPERATOR)

https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html
https://davidwalsh.name/spread-operator





Essentially takes either an array or an object and expands it into its set of items. This lets you do fancy things, so for example if you have the code:

const array = [1, 2];
const array2 = [...array, 3, 4];

The value of array2 will end up being [1, 2, 3, 4].

The spread operator lets you essentially drop an array in and get its values.



example...

setImageAttributes( index, attributes ) {  //function w. 2 parameters.
  const { attributes: { images }, setAttributes } = this.props;
  if ( ! images[ index ] ) {
    return;
  }
  setAttributes( {
    images: [
      ...images.slice( 0, index ), //images are all the images sliced from 0 to index?
      {
        ...images[ index ],
        ...attributes,
      },
      ...images.slice( index + 1 ),
    ],
  } );
}
