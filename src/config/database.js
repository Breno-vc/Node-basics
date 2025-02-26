// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'nodejs-postgres',
  password: 'dockerpass',
  database: 'mydatabase-nodejs',
  define: {
    timestamps: true, // add createdAt and updatedAt columns to db
    underscored: true, // changes camelCase (and others) to snake_case
  },
};
