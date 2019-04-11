/*
 * Title: createInvoice.js Serverless + MicroService
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 11, 2019
 *
 */

// Step1: Discuss the uuid import and need for uuid
import uuid from "uuid";
// Step2: Discuss in tutorial why /lib and response-lib
// exist and why they are used.
import { success, failure } from "./libs/response-lib";

// Step3: Discuss in tutorial the need for a Dynamo table
// and a dynamo table implemented for each microservice
// Implement service below
//import * as dynamoDbLib from "./libs/dynamodb-lib";

export async function main(event, context) {
  // The request body is passed in as a JSON string
  // in event.body and it needs to be parsed!
  const data = JSON.parse(event.body);

  // Now you need to store the information into an
  // object that you will use later to store the data
  // collected from your user into a database of invoices!
  const params = {
    // Step4: Need to describe in tutorial how this object is
    // accessing the table defined in the serverless.yml
    // and how data is being stored in db.
    TableName: process.env.invoiceTbl,
    Item: {
      // Step5: Discussion on DynamoDB sort key design and
      // how to properly aggregate data in table to
      // minimize READS (RCU) from cloud to minimize cost!!!
      userId: event.requestContext.identity.cognitoIdentityId,
      invoiceId: uuid.v1(),
      createdAt: Date.now(),
      description: data.description,
      amount: data.amount,
      attachment: data.attachment

    }
  };

  try {
    // async call to db??????
    // need to implement and test!!!!
    await test.call();
    return success(params.Item);
  } catch ( err ) {
    return failure({
      status: false
    });
  }

}







