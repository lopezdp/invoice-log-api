/*
 * Title: starter.test.js WebService Unit Testing
 * ServerlessStarterService Automated Testing
 * Author: David P. Lopez
 * March 23, 2019
 *
 */

// FIXME: Correct eslint `no-undef` errors
test("Serverless CodeBuild Execution", async () => {
  const event = "event";
  const context = "context";


  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
    expect(response.body).toMatch(/executed/);
  };

  await handler.starterService(event, context, callback);
});
