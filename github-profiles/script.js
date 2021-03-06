const APIURL = "https://api.github.com/users/";

const main = document.getElementById('main');
const submit = document.getElementById('submit');
const input = document.getElementById('input');

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong> Followers</strong></li>
                    <li>${user.following}<strong> Following</strong></li>
                    <li>${user.public_repos}<strong> Repos</strong></li>
                </ul>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

submit.addEventListener('click', () => {
    const username = input.value;
    getUser(username);
});