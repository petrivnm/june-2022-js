// const wrap = document.createElement('div');
// wrap.classList.add('wrap');
// document.body.appendChild(wrap);

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

const getUserById = (id) => {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json())
        .then(value => {

            for (let i = 0; i < value.length; i++) {
                let look = value[i];
                console.log(look);
            }

            const userDiv = document.createElement('div');
            userDiv.innerHTML = `<p> ${value.id} ${value.name}</p>`;

            document.body.appendChild(userDiv);
            }
        )
}
getUserById(userId);





