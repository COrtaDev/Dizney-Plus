'use strict';
const { Video } = require('../models')
const { SeriesSelection } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const selectionsQuery = await SeriesSelection.findAll({
      attributes: ["id", "selection"]
    });
    const selections = selectionsQuery.map(selection => selection.selection);

    const allSeries = await Video.findAll({
      attributes: ["id", "genres"],
      where: {
        isMovie: false,
      }
    });

    const seriesList = [];
    allSeries.forEach(series => {
      const genres = series.genres.split(", ");
      let seenActionAdventure = false;
      const seriesPusher = (matchingSeriesSelectionObj) => {
        const seriesIdSelectionId = {
          videoId: series.id,
          seriesSelectionId: matchingSeriesSelectionObj.id
        };
        seriesList.push(seriesIdSelectionId);
      }

      genres.forEach(genre => {
        if ((genre === "Action" || genre === "Adventure") && !seenActionAdventure) {
          seenActionAdventure = true;
          const matchingSeriesSelectionObj = selectionsQuery.find((selectionObj) => {
            return selectionObj.selection === "ACTION/ADVENTURE";
          });
          seriesPusher(matchingSeriesSelectionObj);

        } else {
          if (selections.includes(genre.toUpperCase())) {

            const matchingSeriesSelectionObj = selectionsQuery.find((selectionObj) => {
              return selectionObj.selection === genre.toUpperCase();
            });
            seriesPusher(matchingSeriesSelectionObj);
          }
        }
      });
    });
    return queryInterface.bulkInsert('SeriesSelectionGroups', seriesList, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SeriesSelectionGroups', null, {});
  }
};
