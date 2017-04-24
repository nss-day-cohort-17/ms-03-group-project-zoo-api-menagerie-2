
exports.up = function(knex, Promise) {
  return knex.schema .createTable('tricks', (table) => {
    table.increments();
    table.string('name');
  })
  .createTable('types', (table) => {
    table.increments();
    table.string('type');
  })
   .createTable('animals', (table) => {
    table.increments();
    table.string('name').notNullable()
    table.integer('age').notNullable();
    table.string('gender').notNullable();
    table.string('species').notNullable();
    table.string('img').notNullable();
    table.integer('trick_id').unsigned().references('tricks.id');
    table.integer('type_id').unsigned().references('types.id');
  })
  .createTable('keepers', (table) => {
    table.increments();
    table.string('name').notNullable()
    table.integer('age').notNullable();
    table.string('gender').notNullable();
    table.string('bio').notNullable();
    table.string('img').notNullable();
    table.string('shift').notNullable();
    table.integer('animal_id').unsigned().references('animals.id');
  })
  .createTable('trainers', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.integer('age').notNullable();
    table.string('gender').notNullable();
    table.string('bio').notNullable();
    table.string('img').notNullable();
    table.integer('trick_id').unsigned().references('tricks.id');
    table.integer('type_id').unsigned().references('types.id');
  })
};

exports.down = (knex, Promise) =>
  knex.schema
  .dropTable('trainers')
  .dropTable('keepers')
  .dropTable('animals')
  .dropTable('types')
  .dropTable('tricks')
