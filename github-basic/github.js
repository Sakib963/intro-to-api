const url = `https://api.github.com/users?per_page=20`

const getUsers = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data);
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getUsers(url);
const userContainer = document.getElementById('card-container');

const displayUsers = (users) => {
    for(const user of users){
        const avatarURL = user.avatar_url;
        const userName = user.login
        const followersURL = user.followers_url;
        // console.log(repoURL)
        const div = document.createElement('div');
        div.classList.add('card', 'card-compact', 'bg-base-300', 'shadow-xl')
        div.innerHTML = `
        <figure><img src="${avatarURL}" class="w-60 h-48"/></figure>
        <div class="card-body">
          <h2 class="card-title">Name: ${userName}</h2>
          <h2 class="card-title">Followers: </h2>
        </div>
        `
        getFollowers(followersURL, div);
        const repoURL = user.repos_url;
        getRepositories(repoURL, div);
        userContainer.appendChild(div);
    }
}

const getFollowers = async(followersURL, div) => {
    try {
        const res = await fetch(followersURL);
        const data = await res.json();
        // console.log(data.slice(0,2))
        displayFollowers(data.slice(0,2), div);
    } catch (error) {
        console.log(error)
    }
}

const displayFollowers = (followers, container) => {
    for(const follower of followers){
        const avatarURL = follower.avatar_url;
        const userName = follower.login
        // console.log(userName)
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
        <figure><img src="${avatarURL}"class="w-20 h-20"/></figure>
        <h2 class="card-title">Name: ${userName}</h2>
      </div>
        `
        container.appendChild(div);
    }

}

const getRepositories = async(repoURL, div) => {
    try {
        const res = await fetch(repoURL);
        const data = await res.json();
        displayRepositories(data.slice(0, 10), div);
        // console.log(data.slice(0, 10))
    } catch (error) {
        
    }
}

const displayRepositories = (repositories, container) => {
    const div = document.createElement('div');
        div.innerHTML = `
        <p>Repository Links: </p>
        `
    for(const  repo of repositories){
        // console.log(repo.html_url)
        const li = document.createElement('li')
        li.innerText = repo.html_url;
        div.appendChild(li);
    }
    container.appendChild(div)
}