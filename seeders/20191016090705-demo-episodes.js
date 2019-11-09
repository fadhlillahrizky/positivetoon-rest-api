'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'ep.1',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F1%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-006.jpg?alt=media',
        webtoonId: 1,
      },
      {
        title: 'ep.2',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F2%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-023.jpg?alt=media',
        webtoonId: 1,
      },
      {
        title: 'ep.3',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F3%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-040.jpg?alt=media',
        webtoonId: 1,
      },
      {
        title: 'ep.4',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F4%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-057.jpg?alt=media',
        webtoonId: 1,
      },
      {
        title: 'ep.1',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F1%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-005.jpg?alt=media',
        webtoonId: 2,
      },
      {
        title: 'ep.1',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%2F2%2F%5BMangato%5D%20Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%20Vol.01-005.jpg?alt=media',
        webtoonId: 3,
      },
      {
        title: 'ep.2',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%2F2%2F%5BMangato%5D%20Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%20Vol.01-005.jpg?alt=media',
        webtoonId: 3,
      },
      {
        title: 'ep.3',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%2F2%2F%5BMangato%5D%20Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%20Vol.01-005.jpg?alt=media',
        webtoonId: 3,
      },
      {
        title: 'ep.1',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Boku%20Dake%20ga%20Inai%20Machi%2F1%2FBoku%20Dake%20ga%20Inai%20Machi%2001%20chapter%2001-03.jpg?alt=media',
        webtoonId: 4,
      },
      {
        title: 'ep.1',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Bokutachi%20Wa%20Benkyou%20Ga%20Dekinai%2F1%2FBokutachi%20Wa%20Benkyou%20Ga%20Dekinai%20-%20001-03.jpg?alt=media',
        webtoonId: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
