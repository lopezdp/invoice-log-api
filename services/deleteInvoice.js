/*
 * Title: deleteInvoice.js Serverless Lambda
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 13, 2019
 *
 */

import { success, failure } from "./libs/responseLib";

// Discuss in tutorial the need for a Dynamo table
// and a dynamo table implemented for each microservice
// Implement service below
import * as dynamoLib from "./libs/dynamoLib";

export async function main(event, context) {
  const params = {
    TableName: process.env.tableName,
    /* 'Key': this is what will define our partition & sort
     *        key for the item that we have to retrieve
     *
     *    - 'userId': is the IdP identity of the authenticated user
     *    - 'invoiceId': is the path parameter that we must include
     *                   in the request to this service
    */

    Key: {
      "userId": event.requestContext.identity.cognitoIdentityId,
      "invoiceId": event.pathParameters.id
    }
  };

  try {
    const result = await dynamoLib.call("delete", params);
    return success({
      status: true
    });
  } catch ( err ) {
    return failure({
      status: false
    });
  }
}
