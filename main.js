const url = 'https://api.github.com/users/6thSence';
let imgUrl = '';
let userName = '';
let profileDescription = '';

fetch(url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        imgUrl = data.avatar_url;
        userName = data.name;
        profileDescription = data.bio;
        console.log('Возврат из then со значением ' + imgUrl  + profileDescription + userName);
    })
    .catch(err => console.log('Информация о пользователе не доступна'));

const getAvatar = function(imgUrl){
    
    const gitName = document.createTextNode(userName);
    document.body.appendChild(gitName);

    const gitAvatar =  document.createElement("img");
    gitAvatar.setAttribute('alt','аватарка');
    gitAvatar.setAttribute('src',imgUrl);
    document.body.appendChild(gitAvatar);

    const gitBio = document.createTextNode(profileDescription);
    document.body.appendChild(gitBio);
}

