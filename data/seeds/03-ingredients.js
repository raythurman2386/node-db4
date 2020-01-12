exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { name: 'sugar' },
    { name: 'cream cheese' },
    { name: 'milk' },
    { name: 'eggs' },
    { name: 'tomatoes' },
  ]);
};
