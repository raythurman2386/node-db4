exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').insert([
    { step_number: 1, instruction: 'testing my seeds', recipe_id: 1 },
    { step_number: 2, instruction: 'testing my seeds', recipe_id: 2 },
    { step_number: 3, instruction: 'testing my seeds', recipe_id: 2 },
    { step_number: 4, instruction: 'testing my seeds', recipe_id: 3 },
    { step_number: 5, instruction: 'testing my seeds', recipe_id: 5 },
  ]);
};
