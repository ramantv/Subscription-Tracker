const db = require("../connection");
const { Service, User } = require("../../models");

const servicesData = require("./serviceData");
const usersData = require("./userData");

db.once("open", async () => {
  // clean db
  await Service.deleteMany({});

  // bulk create model
  await Service.insertMany(servicesData);

  await User.deleteMany({});
  await User.insertMany(usersData);


  console.log("Seeding complete");
  process.exit(0);
});
