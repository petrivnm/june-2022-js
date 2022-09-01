const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
const root = document.createElement('div');
document.body.appendChild(root);

const getUserById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json())
        .then(value => parseKeys(value))
}
getUserById(userId);

const postButton = document.createElement('button');
postButton.innerText = 'post of current user';
postButton.classList.add('button');
document.body.appendChild(postButton);
postButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (post of posts) {
                console.log(post);

                let titlePost = document.createElement('a');
                titlePost.innerText = post.title;
                titlePost.classList.add('button');
                titlePost.href = `post-details.html?id=${post.id}`;

                root.appendChild(titlePost);
            }
        })
})


function parseKeys(object, indent = '') {
    const entries = Object.entries(object);
    entries.forEach(([key, value]) => {
        // якщо велью є примітивом то одразу додаєм в html
        if (typeof value !== 'object') {
            const element = document.createElement('p');
            element.innerHTML = `${indent}<strong>${key}</strong>: ${value}`;
            root.appendChild(element)
        } else if (value !== null) {
            // якщо значення вкладений обʼєк то рекурсивно парсимо значення ще раз (індент то відступ для наглядності)
            const element = document.createElement('p');
            element.innerHTML = `${indent}<strong>${key}</strong>:`;
            root.appendChild(element);
            parseKeys(value, `${indent}--`);
        }
    });
}






