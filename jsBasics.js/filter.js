


const filterFunction = (...args) => {
  return args.filter(el => el ===1)   //return true if el is equal to 1. this is built into filter?
}
console.log(filterFunction(1,2,3)); //will log [1] b.c the rest operator puts it into an array and you filtered through that data.
