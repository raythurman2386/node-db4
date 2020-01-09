exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').insert([
    { name: 'sugar' },
    { name: 'cream cheese' },
    { name: 'milk' },
    { name: 'eggs' },
    { name: 'tomatoes' },
  ]);
};
