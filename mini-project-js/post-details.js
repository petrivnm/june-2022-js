const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {

        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h2>userId -- ${post.userId}<br>id -- ${post.id}</br>title -- ${post.title}<br>  body -- ${post.body}</h2>`;

        wrap.appendChild(userDiv);
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(coments => {
        for (const coment of coments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('coment');
            commentDiv.innerHTML = `<h2>name -- ${coment.name}<br>email -- ${coment.email}</br>body -- ${coment.body}`;

            wrap.appendChild(commentDiv);
        }
    })

