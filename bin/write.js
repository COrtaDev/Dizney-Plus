const fs = require('fs');
// let data = require('./script-testing.js');
//make sure to handle new line
//sample object to write/append:
// class VideoData {
//     constructor(title, description, rating, year, isOriginal, isMovie, runtime, director, starring, seasons, genres, details, videoUrl, titleImg, backgroundImg, buttonImg, brandId) {

//     }
// }
// let videoData = [];

async function write(videoData) {
    fs.appendFile('videos.csv', videoData, err => {
        flag: 'a';
        if (err) throw Error;
    })
}

module.exports = write;
