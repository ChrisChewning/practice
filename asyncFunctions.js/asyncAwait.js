
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


//ASYNC / AWAIT
//function has to be labeled async to use await. Await awaits for an asynchronous function or process to get done.
async function init() {
  await createPost({title: 'Post three', body: 'This is post three'});

  getPosts();
}

init()


//ASYNC / AWAIT using FETCH

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await res.json();

  console.log(data);
}
fetchUsers();
