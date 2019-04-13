/*
 * Title: updateInvoice.js Serverless Lambda
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 13, 2019
 *
 */

import { success, failure } from "./libs/response-lib";

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
		"userId"
	}

  };
}