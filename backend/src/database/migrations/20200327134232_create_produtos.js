exports.up = function(knex) {
  return knex.schema.createTable("produtos", function(table) {
    table.increments();
    table.string("nome").notNullable();
    table.string("descricao").notNullable();
    table.decimal("valor").notNullable();
    table.string("produtor_id").notNullable();

    table
      .foreign("produtor_id")
      .references("id")
      .inTable("produtor");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("produtos");
};
