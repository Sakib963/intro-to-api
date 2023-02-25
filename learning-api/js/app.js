function getComments()
{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
function getAllComments()
{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayAllComments(data))
}

function displayComments(comments){
    let commentCount = 0;
    const container = document.getElementById('container');

    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('bg-[#ffe1c6]', 'p-5', 'rounded-lg', 'text-center');
        div.innerHTML = `
            <p class="text-lg">"${comment['body']}"</p>
            <h2 class="text-lg font-semibold mt-3">${comment['name']}</h2>
            <h4 class="text-lg font-semibold">${comment['email']}</h4>
        `
        container.appendChild(div);
        commentCount++;
        if(commentCount === 8)
        {
            return;
        }
    }
}
function displayAllComments(comments){
    const container = document.getElementById('container-comment');

    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('bg-[#ffe1c6]', 'p-5', 'rounded-lg', 'text-center');
        div.innerHTML = `
            <p class="text-lg">"${comment['body']}"</p>
            <h2 class="text-lg font-semibold mt-3">${comment['name']}</h2>
            <h4 class="text-lg font-semibold">${comment['email']}</h4>
        `
        container.appendChild(div);
    }
}

getComments();
getAllComments();
