function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}
function displayData(posts) {
  const container = document.getElementById("posts-container");
  for (const post of posts) {
    /* const h3 = document.createElement('h3');
        h3.innerText = post['title'];
        const h4 = document.createElement('h4');
        h4.innerText = `User ID: ${post['userId']}`
        const p = document.createElement('p');
        p.innerText = post['body'];

        container.appendChild(h3)
        container.appendChild(h4)
        container.appendChild(p) */

    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
            <h4>User-${post["userId"]}</h4>
            <h5>${post["title"]}</h5>
            <p>${post["body"]}</p>
        `;
    container.appendChild(div);
  }
}

loadPosts();

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 