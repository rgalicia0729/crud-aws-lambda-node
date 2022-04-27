'use strict'

const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const createTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { title, description } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newTask = {
    id,
    title,
    description,
    createdAt
  }

  await dynamodb.put({
    TableName: 'TaskTable',
    Item: newTask
  }).promise();

  return {
    status: 201,
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: {
      newTask
    }
  }

};

module.exports = {
  createTask
};