
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
    if (error) { //if this is set to true   if (error) you'll see logged out 'uncaught (in promise) something went wrong'
      resolve();
    } else {
      reject('something went wrong');
    }
  }, 2000);
});
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));
//won't put in a callback like the other one, which uses getPosts.
//.then is used with a promise here.

//fetch api, mongoose library (mongo for node.js) all use promises.
