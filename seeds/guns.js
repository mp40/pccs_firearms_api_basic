const { guns } = require("./seedGuns");

exports.seed = function(knex, Promise) {
  return knex("guns")
    .del()
    .then(function() {
      return knex("guns").insert(guns);
    });
};
