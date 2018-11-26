console.log(document);
console.log(1234)
console.log(true)
console.time('Hello')
console.log('hi')
console.timeEnd('Hello')

for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log('the number is 2');
    } else {
        console.log(i)
    }
}

const users = [
    {id: 1, name: 'Chris'}, 
    {id: 2, hobbies: 'Running'}
    ]

 const id = users.map(function(user) { //user is your argument. it can't be users.
     return user.id //remember user of users
    })
    console.log(id);
    


    //FOR IN LOOP
    const user = {
        firstName: 'John', 
        lastName: 'Doe', 
        age: 40
    }
    
    for (let x in user){ //key gives you the key.
        console.log(`${x} : ${user[x]}`); //user without the x logs to object object
    }
    
    
    val = window.navigator.userAgent;

    console.log(val);