/*
 * Title: listInvoices.js Serverless Lambda
 * Unique Sowtware Development, LLC
 * Author David P. Lopez
 * Aprin 14, 2019
 *
 */

import { success, failure } from "./libs/response-lib";

export async function main(event, context) {

  const params = {
    TableName: process.env.tableName,

    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    const result = await test.call("query", params);
    // return the matching list of invoices in response.body!
    return success(result.Items);
  } catch ( err ) {
    return failure({
      status: false
    });
  }
}
