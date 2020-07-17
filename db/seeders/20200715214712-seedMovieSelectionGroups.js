'use strict';
const { Video } = require('../models')
const { MovieSelection } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

      const selectionsQuery = await MovieSelection.findAll({
        attributes: ["id", "selection"]
      });
      const selections = selectionsQuery.map(selection => selection.selection);

      const movies = await Video.findAll({ 
        attributes: ["id", "genres"],
        where: {
          isMovie: true,
        }
      });

      const movieList = [];
      movies.forEach(movie => {
          const genres = movie.genres.split(", ");
          let seenActionAdventure = false;
          const moviePusher = (matchingMovieSelectionObj) => {
            const movieIdSelectionId = {
              videoId: movie.id,
              movieSelectionId: matchingMovieSelectionObj.id
            };
            movieList.push(movieIdSelectionId);
          }

          
          genres.forEach(genre => {
            if(genre === "Short"){
              const matchingMovieSelectionObj = selectionsQuery.find((selectionObj) => {
                return selectionObj.selection === "SHORTS";
              });
              moviePusher(matchingMovieSelectionObj);

            } else if((genre === "Action" || genre === "Adventure") && !seenActionAdventure ){
              seenActionAdventure = true;  
              const matchingMovieSelectionObj = selectionsQuery.find((selectionObj) => {
                return selectionObj.selection === "ACTION/ADVENTURE";
              });
              moviePusher(matchingMovieSelectionObj);

            } else {
              if(selections.includes(genre.toUpperCase())){

              const matchingMovieSelectionObj = selectionsQuery.find((selectionObj) => {
                return selectionObj.selection === genre.toUpperCase();
              });
                moviePusher(matchingMovieSelectionObj); 
              }
            }
          });
      });
    
    return queryInterface.bulkInsert('MovieSelectionGroups', movieList, { });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieSelectionGroups', null, {});
  }
};
