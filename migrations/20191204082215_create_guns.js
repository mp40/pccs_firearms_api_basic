// eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
  return knex.schema.createTable("guns", t => {
    t.increments().index();
    t.string("name", 25)
      .unique()
      .notNullable()
      .index();
    t.integer("kd")
      .notNullable()
      .index();
    t.specificType("aim-ac", "integer[]")
      .notNullable()
      .index();
    t.specificType("aim-mod", "integer[]")
      .notNullable()
      .index();
  });
};

// eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("guns");
};
