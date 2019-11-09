'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
      {
        page: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-007.jpg?alt=media',
        episodeId: 1,
        webtoonId: 1,
      },
      {
        page: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-008.jpg?alt=media',
        episodeId: 1,
        webtoonId: 1,
      },
      {
        page: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-009.jpg?alt=media',
        episodeId: 1,
        webtoonId: 1,
      },
      {
        page: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-010.jpg?alt=media',
        episodeId: 1,
        webtoonId: 1,
      },
      {
        page: 5,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-011.jpg?alt=media',
        episodeId: 1,
        webtoonId: 1,
      },
      {
        page: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F2%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-025.jpg?alt=media',
        episodeId: 2,
        webtoonId: 1,
      },
      {
        page: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F2%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-026.jpg?alt=media',
        episodeId: 2,
        webtoonId: 1,
      },
      {
        page: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F2%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-027.jpg?alt=media',
        episodeId: 2,
        webtoonId: 1,
      },
      {
        page: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F2%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-029.jpg?alt=media',
        episodeId: 2,
        webtoonId: 1,
      },
      {
        page: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F1%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-007.jpg?alt=media',
        episodeId: 1,
        webtoonId: 2,
      },
      {
        page: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F1%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-008.jpg?alt=media',
        episodeId: 1,
        webtoonId: 2,
      },
      {
        page: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F1%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-009.jpg?alt=media',
        episodeId: 1,
        webtoonId: 2,
      },
      {
        page: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F1%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-010.jpg?alt=media',
        episodeId: 1,
        webtoonId: 2,
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
