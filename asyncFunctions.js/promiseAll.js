
const posts = [
  {title: 'Post One', body: 'This is post one',},
  {title: 'Post Two', body: 'This is post two',},
]

function getPosts(){
  setTimeout(() => { //es6
  // setTimeout()function({ //es5
  let output = '';
  posts.forEach((post, index) => {
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;

  }, 1000)
}

function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(post);
//waiting for the set timeout to be done it'll resolve. once it resolves it'll call getPost.

    const error = false;
    if (!error) { //if this is set to true   if (error) you'll see logged out 'uncaught (in promise) something went wrong'
      resolve();
    } else {
      reject('something went wrong');
    }
  }, 2000);
});
}

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye'));

//with fetch you need to do 2 .thens.  first: json. next: data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json() );
//without then .then() you get the metadata?
//with the .then() you actually get the user data.


Promise.all([promise1, promise2, promise3, promise4]).then(( (values) => console.log(values))); //takes in an array of promises
