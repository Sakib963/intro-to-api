function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const username = document.getElementById('userName');
        username.innerText = data[0]['email']
        console.log(data)
    })
}

function displayUsers(data){
    console.log(data)
}