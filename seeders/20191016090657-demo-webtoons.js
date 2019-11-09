'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Karakai Jouzu',
        genre: 'romance',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Karakai%20jouzu%2F%5BMangato%5D%20Karakai%20Juozu%20NTS%20Vol.01-001.jpg?alt=media',
        favorite_count: 60,
        create_by: 1
      },
      {
        title: 'Kono Bijutsubi Ni Wa MGA!',
        genre: 'School Life',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kono%20Bijutsubu%20ni%20wa%20MGA!%2F%5BMangato%5D%20Kono%20Bijutsubu%20ni%20wa%20MGA!%20Vol.01-001.jpg?alt=media',
        favorite_count: 8,
        create_by: 2
      },
      {
        title: 'Kunumi-kun Kuuki Yometemasu Ka',
        genre: 'School Life',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%2F%5BMangato%5D%20Kuzumi-kun%20Kuuki%20Yometemasu%20Ka%20Vol.01-001.jpg?alt=media',
        favorite_count: 21,
        create_by: 1
      },
      {
        title: 'Boku Dake ga Inai Machi',
        genre: 'School Life',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Boku%20Dake%20ga%20Inai%20Machi%2FBoku%20Dake%20ga%20Inai%20Machi%2001%20chapter%2001-02.jpg?alt=media',
        favorite_count: 45,
        create_by: 2
      },
      {
        title: 'Bokutachi Wa Benkyou Ga Dekinai',
        genre: 'School Life',
        image: 'https://firebasestorage.googleapis.com/v0/b/positivetoon-rest-api.appspot.com/o/Bokutachi%20Wa%20Benkyou%20Ga%20Dekinai%2FBokutachi%20Wa%20Benkyou%20Ga%20Dekinai%20-%20001-03.jpg?alt=media',
        favorite_count: 23,
        create_by: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
