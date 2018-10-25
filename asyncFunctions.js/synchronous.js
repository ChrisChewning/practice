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

getPosts();

//THIS ONE WON'T WORK B.C IT IS SET AT 2 SECONDS. IT NEVER REACHES IT.
function createPost(post){
  setTimeout(() => {
    posts.push(post);
  }, 2000)
}

createPost({ title: 'Post Three', body: 'This is post three'});
