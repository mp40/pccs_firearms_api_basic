const { development } = require("./knexfile");
const knex = require("knex")(development);

const getGuns = function() {
  return knex.select().table("guns");
};

module.exports = {
  getGuns
};
