const AWS = require('aws-sdk');

const getTasks = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({
    TableName: 'TaskTable'
  }).promise();

  const items = result.items

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: items
  }
}

module.exports = {
  getTasks
}