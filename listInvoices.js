/*
 * Title: listInvoices.js Serverless Lambda
 * Unique Software Development, LLC
 * Author David P. Lopez
 * Aprin 14, 2019
 *
 */

import { success, failure } from "./libs/responseLib";

export async function main(event, context) {

  const params = {
    TableName: process.env.tableName,
    /*
     * KeyConditionExpression will define the condition for the
     * query.
     * - 'userId = :userId' will only return the Items tht match
     *          the 'userId' PartitionKey.
     *
     * ExpressionAttributeValues will define the value in the
     * condition.
     * - ':userId': will define a 'userId' that maps to the
     *           Identity Pool Cognito Identity Id of the
     *           authenticated user!!!
     *
     */

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
