/**
 * The config object for the env variables.
 *
 * @type {Object}
 */
const config = {
  dev: process.env.NODE_ENV !== 'production',
  apiUri: process.env.FUNDS_API_URL,
  userName: process.env.FUNDS_API_USER_NAME,
  userPassword: process.env.FUNDS_API_USER_PASSWORD,
};

module.exports = { config };
