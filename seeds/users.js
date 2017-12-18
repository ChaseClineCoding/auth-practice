
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Chase',
          password: 'abcd1'
        },
        {
          username: 'Bill',
          password: 'abcd2'
        },
        {
          username: 'Tony',
          password: 'abcd3'
        },
      ]);
    });
};
