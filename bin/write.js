const fs = require('fs');
let data = require('./script-testing.js');
//make sure to handle new line
//sample object to write/append:
class VideoData {
    constructor(id,title) {

    }
}

function write(videoData) {
    fs.appendFile('videos.txt', videoData, err => {
        flag: 'a';
        if (err) throw Error;
    })
}

module.exports = write;
