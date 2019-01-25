let url = 'https://api.github.com/users/';
let user = window.location.search.slice(10,);
let urlGit = url + user;
let imgUrl = '';
let userName = '';
let profileDescription = '';

fetch(urlGit)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        imgUrl = data.avatar_url;
        if (imgUrl != null) {
            const gitAvatar =  document.createElement("img");
            gitAvatar.setAttribute('alt','аватарка');
            gitAvatar.setAttribute('src',imgUrl);
            document.body.appendChild(gitAvatar);
        } else
            console.log('Информация об аватарке пользователе не доступна');

        userName = data.name;
        if (userName != null) {
            const gitName = document.createElement("h1");
            document.body.appendChild(gitName);
            gitName.appendChild(document.createTextNode(userName));

        } else
            console.log('Информация об имени пользователя не доступна');

        profileDescription = data.bio;
        if (profileDescription != null) {
            const gitBio = document.createElement("div");
            document.body.appendChild(gitBio);
            gitBio.appendChild(document.createTextNode(profileDescription));
        } else
            console.log('Информация об описании профиля пользователя не доступна');
    })
    .catch(err => console.log('Информация о пользователе не доступна'));
