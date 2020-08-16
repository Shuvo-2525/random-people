fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => getUserName(json))

function getUserName(users) {
    // console.log(users)
    const userName = users.map( x => x.username )
    // console.log(userName)
    const ul = document.getElementById("new-people-list");
    // console.log(ul)
    for (let i = 0; i < userName.length; i++) {
        const element = userName[i];
        // console.log(element)
        const li = document.createElement('li')
        li.innerText = element ;
        ul.appendChild(li)
        li.style.cssText = "list-style : none ; font-size : 35px"
    }
    
}
 ;
