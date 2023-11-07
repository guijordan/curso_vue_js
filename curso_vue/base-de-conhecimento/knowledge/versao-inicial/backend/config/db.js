const config = requre('../knexfile.js');
const knex = require('knex')(config);
module.exports = knex;