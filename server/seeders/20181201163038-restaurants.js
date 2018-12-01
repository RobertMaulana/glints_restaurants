'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!isProduction) {
      return queryInterface.bulkInsert('restaurants',
        [{
          name: '2G Japanese Brasserie',
          open: 'Mon-Thu, Sun 11 am - 10 pm  / Fri-Sat 11 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'A-1 Cafe Restaurant',
          open: 'Mon, Wed-Sun 11 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Alhamra',
          open: 'Mon-Sun 11 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Aliotos Restaurant',
          open: 'Mon-Sun 11 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'All Season Restaurant',
          open: 'Mon-Fri 10 am - 9:30 pm  / Sat-Sun 9:30 am - 9:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bai Thong Thai Cuisine',
          open: 'Mon-Sat 11 am - 11 pm  / Sun 11 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bamboo Restaurant',
          open: 'Mon-Sat 11 am - 12 am  / Sun 12 pm - 12 am',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Blu Restaurant',
          open: 'Mon-Fri 11:30 am - 10 pm  / Sat-Sun 7 am - 3 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bombay Indian Restaurant',
          open: 'Mon-Sun 11:30 am - 10:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bow Hon Restaurant',
          open: 'Mon-Sun 11 am - 10:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Burger Bar',
          open: 'Mon-Thu, Sun 11 am - 10 pm  / Fri-Sat 11 am - 12 am',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Canton Seafood & Dim Sum Restaurant',
          open: 'Mon-Fri 10:30 am - 9:30 pm  / Sat-Sun 10 am - 9:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cesarios',
          open: 'Mon-Thu, Sun 11:30 am - 10 pm  / Fri-Sat 11:30 am - 10:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Chili Lemon Garlic',
          open: 'Mon-Fri 11 am - 10 pm  / Sat-Sun 5 pm - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Colombini Italian Cafe Bistro',
          open: 'Mon-Fri 12 pm - 10 pm  / Sat-Sun 5 pm - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Far East Cafe',
          open: 'Mon-Sun 11:30 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Hanuri',
          open: 'Mon-Sun 11 am - 12 am',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Herbivore',
          open: 'Mon-Thu, Sun 9 am - 10 pm  / Fri-Sat 9 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'India Garden Restaurant',
          open: 'Mon-Sun 10 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Iroha Restaurant',
          open: 'Mon-Thu, Sun 11:30 am - 9:30 pm  / Fri-Sat 11:30 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Isobune Sushi',
          open: 'Mon-Sun 11:30 am - 9:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Johns Grill',
          open: 'Mon-Sat 11 am - 10 pm  / Sun 12 pm - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kyoto Sushi',
          open: 'Mon-Thu 11 am - 10:30 pm  / Fri 11 am - 11 pm  / Sat 11:30 am - 11 pm  / Sun 4:30 pm - 10:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Marrakech Moroccan Restaurant',
          open: 'Mon-Sun 5:30 pm - 2 am',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'McCormick & Kuletos',
          open: 'Mon-Thu, Sun 11:30 am - 10 pm  / Fri-Sat 11:30 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mifune Restaurant',
          open: 'Mon-Sun 11 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Naan N Curry',
          open: 'Mon-Sun 11 am - 4 am',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'New Delhi Indian Restaurant',
          open: 'Mon-Sat 11:30 am - 10 pm  / Sun 5:30 pm - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Nicks Lighthouse',
          open: 'Mon-Sun 11 am - 10:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Osakaya Restaurant',
          open: 'Mon-Thu, Sun 11:30 am - 9 pm  / Fri-Sat 11:30 am - 9:30 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Paragon Restaurant & Bar',
          open: 'Mon-Fri 11:30 am - 10 pm  / Sat 5:30 pm - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Parallel 37',
          open: 'Mon-Sun 11:30 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Penang Garden',
          open: 'Mon-Thu 11 am - 10 pm  / Fri-Sat 10 am - 10:30 pm  / Sun 11 am - 11 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Quan Bac',
          open: 'Mon-Sun 11 am - 10 pm',
          createdAt: new Date(),
          updatedAt: new Date()
        }]
      )
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurants', null, {})
  }
}
