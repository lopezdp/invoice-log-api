/*
 * Title: dynamoLib.js Asynchronous Library
 * Unique Software Development, LLC
 * Author David P. Lopez
 * Aprin 14, 2019
 *
 */

// Need to use and import the aws-sdk
import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1"
});

export function call(action, params) {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  // return a promise with the results for
  // the specified action and params
  return dynamo[action](params).promise();
}
