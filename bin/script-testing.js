const fetch = require('node-fetch');
const parse = require('csv-parse');
const table = require('./export.js')
const fs = require('fs');
const apiKey = '272fff24';
//http://www.omdbapi.com/?i=tt3896198&apikey=272fff24
// const title = 'the+clone+wars'
let isMovie;
let isOriginal = false;

async function omdbFetch() {
    for (let i = 198; i < table.length; i++) {
        title = table[i]['title'];
        let encoded = encodeURI(title);
        let url = `http://www.omdbapi.com/?t=${encoded}&apikey=${apiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        if (data.Title === undefined | !data.Response) {
            console.log(`!!!\n!!!\n!!!\nThere is an issue with ${title} at index:${i}!!!\n!!!\n!!!\n`);
            throw Error('Fix this title!')
        }
        try {
            await fetchFromOMDB(data);
        } catch (e) {
            return res.end();
        }
    }
}
async function fetchFromOMDB(data) {
    console.log(`\nTitle:\n\n${data.Title}\n`);
    if (data.Type === 'movie') await handleMovie(data);
    if (data.Type === 'series') await handleSeries(data);
    await handleYear(data)
    if (data.Runtime) await handleRuntime(data)
    await handleGenre(data);
    console.log(`This is the plot synopsis: \n\n "${data.Plot}"\n`);
    if (data.Season) console.log(data.Season);
    if (data.totalSeasons) console.log(`There are ${data.totalSeasons} Seasons in this series...`);
    await handleOriginal(data);

}
async function handleYear(data) {
    if (isMovie) console.log(`\nThis was movie was released in: \n\n${data.Year}\n`);
    else console.log(`This was series ran from: \n${data.Year}\n`);
}
async function handleRuntime(data) {
    let time = Number.parseInt(data.Runtime);
    await convertTime(time, data);
}
async function handleGenre(data) {
    if (isMovie) console.log(`This movie fits the following genres: ${data.Genre}\n`);
    if (!isMovie) console.log(`This series fits the following genres: ${data.Genre}\n`);
}
async function convertTime(time) {
    let hours = Math.floor(time / 60);
    let mins = Math.floor(((time / 60) - Math.floor(time / 60)) * 60);
    if (hours) console.log(`This is the movie runtime: \n\n ${hours}hr ${mins}min.\n`);
}
async function handleMovie(data) {
    isMovie = true;
    await handleMovieRating(data);
    console.log(`~~~~~This is a pre-recorded message...~~~~~~\n`);
    console.log(`It is clear that this is a ${data.Type}, please set the value of "isMovie: ${isMovie}". Thank you. Have a wonderful day.`);
}
async function handleSeries(data) {
    isMovie = false;
    await handleTVRating(data);
    console.log(`~~~~~This is a pre-recorded message...~~~~~~\n`);
    console.log(`It is clear that this is a ${data.Type}, please set the value of "isMovie: ${isMovie}". Thank you. Have a wonderful day.`);
}
async function handleMovieRating(data) {
    console.log(`Attention parents: This movie has been rated: ${data.Rated}...\n`);
    if (data.Rated === 'G' | data.Rated === 'PG') console.log(`We have determined "${data.Title}" is kid friendly.\n`);
    if (data.Rated === 'PG-13') console.log(`We have determined "${data.Title}" is teens and above.\n`);
}
async function handleTVRating(data) {
    console.log(`Attention parents: This series has been rated: ${data.Rated}...\n`);
    if (data.Rated === 'TV-G' | data.Rated === 'TV-PG') console.log(`We have determined "${data.Title}" is family friendly.\n`);
    if (data.Rated === 'TV-Y7' | data.Rated === 'TV-Y') console.log(`We have determined" ${data.Title}" is perfect for the wee babes.\n`);
    if (data.Rated === 'TV-14') console.log(`We have determined "${data.Title}" is teens and above... Not particularly kid friendly\n`);
}
async function handleOriginal(data) {
    if (data.Production === 'Walt Disney Pictures') {
        isOriginal = true;
        console.log(`This is a Disney Original, set the value of "isOriginal: ${isOriginal}".`);
        isOriginal = false;
    } else {
        console.log(`This is not a Disney Original, set the value of "isOriginal: ${isOriginal}".`);
    }
}
// async function handleError(title, i) {
//     console.log(`!!!\n!!!\n!!!\nThere is an issue with ${title} at index:${i}!!!\n!!!\n!!!\n`);
//     return res.end();
// }
omdbFetch();



module.exports = data;
