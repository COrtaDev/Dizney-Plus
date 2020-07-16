const fetch = require('node-fetch');
// const parse = require('csv-parse');
const table = require('./export.js')
// const fs = require('fs');
const apiKey = '272fff24';
const write = require('./write.js');
//http://www.omdbapi.com/?i=tt3896198&apikey=272fff24
// const title = 'the+clone+wars'
let isMovie;
let isOriginal = false;
let videoData;
let runtime;
let seasons;
let rating;

async function omdbFetch() {
    for (let i = 0; i < table.length; i++) {
        title = table[i]['title'];
        let encoded = encodeURI(title);
        let url = `http://www.omdbapi.com/?t=${encoded}&apikey=${apiKey}`;
        let longUrl = `http://www.omdbapi.com/?t=${encoded}&plot=full&apikey=${apiKey}`
        if (title === 'lady and the tramp' | title === 'aladdin' | (title === 'the lion king' & table[i]['year'] === '2019')) await handleRemakes(title, i);
        else {
            let res = await fetch(url);
            let longRes = await fetch(longUrl)
            let data = await res.json();
            let details = await longRes.json();
            if (data.Title === undefined | !data.Response) {
                console.log(`!!!\n!!!\n!!!\nThere is an issue with ${title} at index:${i}!!!\n!!!\n!!!\n`);
                throw Error('Fix this title!')
            }
            try {
                await fetchFromOMDB(data);
            } catch (e) {
                return res.end();
            }
            //(title, description, rating, year, isOriginal, isMovie, runtime, director, starring, seasons, genres, details, videoUrl, titleImg, backgroundImg, buttonImg, brandId)
            if (!seasons | seasons === 'N/A') seasons = null;
            if (rating === 'Not Rated') rating = null;
            if (data.Director === 'N/A') data.Director = null;
            if (data.Genre === 'N/A') data.Genre = 'Other';
            if (details.Plot === 'N/A') details.Plot = data.Plot;
            if (data.Plot === 'N/A' && details.Plot === 'N/A') await handleEmptyPlots(data, details)
            if (runtime === 'NaNmins') await handleNaNmins()
            if (data.Actors === 'N/A') data.Actors = null
            //A cooking competition that challenges five food-loving families to create delicious dishes inspired by the magic of Disney. In each episode, two families go head-to-head in a themed cooking challenge at Walt Disney World.
            // let titleImg = `https://dizneyplus.s3.us-east-2.amazonaws.com/images/disneyPlusRips/titles/\/${title}\/g-title.png`
            videoData = `
            (${data.Title}, ${data.Plot}, ${rating}, ${data.Year}, ${isOriginal}, ${isMovie}, ${runtime}, ${data.Director}, "${data.Actors}", ${seasons}, "${data.Genre}", ${details.Plot}, ${table[i]['url']})
            `;
            await write(videoData);
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
    if (data.Season) {
        seasons = data.Season;
        console.log(seasons);
    }
    if (data.totalSeasons) {
        seasons = data.totalSeasons;
        console.log(`There are ${seasons} Seasons in this series...`);
    }
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
    if (hours) {
        runtime = `${hours}hrs ${mins}mins`
        console.log(`The runtime is: \n\n ${hours}hr ${mins}mins.\n`);
        return runtime;
    }
    else {
        runtime = `${mins}mins`
        console.log(`The runtime is ${mins}mins.`);
        return runtime;
    }
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
    if (data.Rated === 'G' | data.Rated === 'PG') {
        rating = data.Rated;
        console.log(`We have determined "${data.Title}" is kid friendly.\n`);
    }
    if (data.Rated === 'PG-13') {
        rating = data.Rated;
        console.log(`We have determined "${data.Title}" is teens and above.\n`);
    }

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
async function handleRemakes(title, i) {
    let encoded = encodeURI(title);
    let remakeUrl = `http://www.omdbapi.com/?t=${encoded}&y=2019&apikey=${apiKey}`;
    let remakeLongUrl = `http://www.omdbapi.com/?t=${encoded}&y=2019&plot=full&apikey=${apiKey}`
    let remakeRes = await fetch(remakeUrl);
    let remakeLongRes = await fetch(remakeLongUrl)
    let data = await remakeRes.json();
    let details = await remakeLongRes.json();
    videoData = `
        (${data.Title}, ${data.Plot}, ${rating}, ${data.Year}, ${isOriginal}, ${isMovie}, ${runtime}, ${data.Director}, ${data.Actors}, ${seasons}, ${data.Genre}, ${details.Plot}, ${table[i]['url']})
        `;
    await write(videoData);
}
async function handleNaNmins() {
    randomMins = Math.floor(Math.random() * (Math.floor(59) - Math.ceil(20) + 1)) + Math.ceil(20);
    return runtime = `${randomMins}mins`;
}
async function handleEmptyPlots(data, details) {
    if (data.Title === 'Be Our Chef') {
        details.Plot = 'A cooking competition that challenges five food-loving families to create delicious dishes inspired by the magic of Disney. In each episode, two families go head-to-head in a themed cooking challenge at Walt Disney World.'
        data.Plot = 'A cooking competition that challenges five food-loving families to create delicious dishes inspired by the magic of Disney. In each episode, two families go head-to-head in a themed cooking challenge at Walt Disney World.'
    }
    if (data.Title === 'Prowlers of the Everglades') {
        details.Plot = "Watch as the alligator, the unquestioned apex predator of the Everglades, follows its cycle of life much the same as it did in prehistoric times."
        data.Plot = 'Travel back in time as a primeval reptile stalks its prey in "the swamp that time forgot." Watch as the alligator, the unquestioned apex predator of the Everglades, follows its cycle of life much the same as it did in prehistoric times. Coy females lead fierce bulls into vicious mating battles, mothers struggle to keep their nests safe from scavenging egg thieves and baby alligators struggle to survive even the short trip from their nest to the dazzling and disorienting world beneath the surface of the water.'
    }
    if (data.Title === 'Drain the Sunken Pirate City') {
        details.Plot = "Port Royal, the 'wickedest city on Earth', famous for its Caribbean pirates, liquor, is torn apart on June 7th 1692 by quake and tsunami. Two thirds of buildings are sucked into the ocean, the rest buried where they sink. 2,000 die. Marine archaeologist Jon Henderson goes in search of what happened. "
        data.Plot = "Port Royal, the 'wickedest city on Earth', famous for its Caribbean pirates, liquor, is torn apart on June 7th 1692 by quake and tsunami. Two thirds of buildings are sucked into the ocean, the rest buried where they sink. 2,000 die. Marine archaeologist Jon Henderson goes in search of what happened. Scientific data combines with computer graphics to DRAIN the waters to investigate final moments and resurrect past secrets."
    }
    if (data.Title === "Disney's The Book of Once Upon a Time Season 3") {
        details.Plot = "Join Disney Junior’s littlest story tellers for a magical storytelling experience from ‘The Book of Once Upon a Time’."
        data.Plot = "Join Disney Junior’s littlest story tellers for a magical storytelling experience from ‘The Book of Once Upon a Time’."
    }
    if (data.Title === 'Prairie Dog Manor') {
        details.Plot = 'Prairie Dog Manor" gives an in depth look at the unique behaviors and relationships between the Prairie Dogs that inhibit the Valles Caldera National Preserve in northern New Mexico.'
        data.Plot = '"Prairie Dog Manor" gives an in depth look at the unique behaviors and relationships between the Prairie Dogs that inhibit the Valles Caldera National Preserve in northern New Mexico.'
    }
    if (data.Title === 'Secrets of the Zoo: Tampa') {
        details.Plot = "'Secrets of the Zoo: Tampa' embraces the wild side of the Sunshine State with a stellar zoo team devoted to the exotic cast of animals."
        data.Plot = "'Secrets of the Zoo: Tampa' embraces the wild side of the Sunshine State with a stellar zoo team devoted to the exotic cast of animals."
    }
}
// async function handleError(title, i) {
//     console.log(`!!!\n!!!\n!!!\nThere is an issue with ${title} at index:${i}!!!\n!!!\n!!!\n`);
//     return res.end();
// }
omdbFetch();



module.exports = videoData;
