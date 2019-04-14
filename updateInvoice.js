/*
 * Title: updateInvoice.js Serverless Lambda
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 13, 2019
 *
 */

import { success, failure } from "./libs/responseLib";

export async function main(event, context) {
  const data = JSON.parse(event.body);

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
      // Need a tutorial setting up Cognito!!!!
      "userId": event.requestContext.identity.cognitoIdentityId,
      "invoiceId": event.pathParameters.id
    },
    /*
     * 'UpdateExpression' defines the attributes to update
     *
     * 'ExpressionAttributeValues' defined the value that
     *		that we need in UpdateExpression
     *
    */
    UpdateExpression: "SET content = :content, :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    /*
     * 'ReturnValues' specifies if and how to return our Item's
     * attributes, where ALL_NEW returns all attributes of the
     * item after the update.
     *
     * Inspect 'result' to verify the values of the different
     * applications settings that we configure
     *
    */
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await test.call("update", params);
    return success({
      status: true
    });
  } catch ( err ) {
    return failure({
      status: false
    });
  }
}























