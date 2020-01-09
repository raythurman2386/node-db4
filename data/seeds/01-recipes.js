exports.seed = async function(knex) {
  await knex('recipes').insert([
    { name: 'Brownies' },
    { name: 'Cheesecake' },
    { name: 'Cookies' },
    { name: 'Spaghetti' },
    { name: 'Alfredo' },
  ]);
};
