const db = require('../connection');
const { Service } = require('../../models');

const servicesData = require('./serviceData');

db.once('open', async () => {
  // clean db
  await Service.deleteMany({});

  // bulk create model
  await Service.insertMany(servicesData);

  console.log('Seeding complete');
  process.exit(0);
});
