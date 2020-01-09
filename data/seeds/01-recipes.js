exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').insert([
    { name: 'Brownies' },
    { name: 'Cheesecake' },
    { name: 'Cookies' },
    { name: 'Spaghetti' },
    { name: 'Alfredo' },
  ]);
};
