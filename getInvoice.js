/*
 * Title: getInvoice.js Serverless Lambda
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 13, 2019
 *
 */

// Step1: Discuss in tutorial why /lib and response-lib
// exist and why they are used. (See create)
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  // Request body is passed in as a JSON string in event.body!
  const data = JSON.parse(event.body);

  // Same as in createInvoice we need to declare the object
  // that we want to get from the database this time
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
      userId: event.requestContext.identity.cognitoIdentityId,
      invoiceId: event.pathParameters.id
    }
  };

  try {
    const result = await test.call("get", params);
    if (result.Item) {
      //return the item that we retrieved
      return success(result.Item);
    } else {
      return failure({
        status: false,
        error: "Item was not found in the DB."
      });
    }
  } catch ( err ) {
    return failure({
      status: false
    });
  }
}
