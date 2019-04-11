/*
 * Title: response-lib.js Service Response Library
 * Unique Software Development, LLC
 * Author: David P. Lopez
 * April 11, 2019
 *
 */

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}

export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}
