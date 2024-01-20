/* eslint-disable no-unused-vars */
const data = require('../src/assets/joys.json');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  };
};
