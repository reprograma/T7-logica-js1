var gifs  = [
    `<img src="https://media.giphy.com/media/iTOS89Y0gD1ny/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/WWyT3VgEgIK8U/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/e9qKoKIDUTlrW/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/79KlcJHXNtpPW/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/iUR4qsCkrNHhe/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/KZGN8tU5OmFJC/giphy.gif" alt="">`,
];

// Mesma coisa que criar objeto definindo posiçoes
// var gifs = {
//     [0] : `<img src="https://media.giphy.com/media/iTOS89Y0gD1ny/giphy.gif" alt="">`,
//     [1] : `<img src="https://media.giphy.com/media/WWyT3VgEgIK8U/giphy.gif" alt="">`,
//     [2] : `<img src="https://media.giphy.com/media/e9qKoKIDUTlrW/giphy.gif" alt="">`,
//     [3] : `<img src="https://media.giphy.com/media/79KlcJHXNtpPW/giphy.gif" alt="">`,
//     [4] : `<img src="https://media.giphy.com/media/iUR4qsCkrNHhe/giphy.gif" alt="">`,
//     [5] : `<img src="https://media.giphy.com/media/KZGN8tU5OmFJC/giphy.gif" alt="">`,
// }

function sortearGifs() {
    var random = Math.floor(Math.random() * 6);
    document.getElementById('ondeVaoOsGifs').innerHTML = gifs[random];
};