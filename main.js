// let url = 'https://api.github.com/users/';
// let user = window.location;
// let urlGit = url + user;
// let imgUrl = '';
// let userName = '';
// let profileDescription = '';
//
// fetch(urlGit)
//     .then(response => response.json())
//     .then(function(data) {
//         console.log(data);
//         imgUrl = data.avatar_url;
//         userName = data.name;
//         profileDescription = data.bio;
//
//     })
//     .catch(err => console.log('Информация о пользователе не доступна'));
//
// const getAvatar = function(imgUrl){
//
//     const gitName = document.createTextNode(userName);
//     document.body.appendChild(gitName);
//
//     const gitAvatar =  document.createElement("img");
//     gitAvatar.setAttribute('alt','аватарка');
//     gitAvatar.setAttribute('src',imgUrl);
//     document.body.appendChild(gitAvatar);
//
//     const gitBio = document.createTextNode(profileDescription);
//     document.body.appendChild(gitBio);
// }
//

//let urlGit = url + user;
let imgUrl = '';
let userName = '';
let profileDescription = '';

// Ник пользователя нужно получить из параметра в URL.
//     по маске из задания                 {адрес страницы}?username={имя пользователя}
//берем имя из введенного адреса "?username=6thSence"
let nameFromUrl = window.location.search.slice(10,);   //возвратить должно "6thSence"

function getUserInfo(nameFromUrl) {
    return fetch('https://api.github.com/users/' + name)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);
            imgUrl = data.avatar_url;
            userName = data.name;
            profileDescription = data.bio;
        })
        .catch(err => console.log('Информация о пользователе не доступна'));

}
getUserInfo(nameFromUrl);

const makeBlocks = function(){
    const gitName = document.createTextNode(userName);
    document.body.appendChild(gitName);
    const gitAvatar =  document.createElement("img");
    gitAvatar.setAttribute('alt','аватарка');
    gitAvatar.setAttribute('src',imgUrl);
    document.body.appendChild(gitAvatar);

    const gitBio = document.createTextNode(profileDescription);
    document.body.appendChild(gitBio);
};

makeBlocks();