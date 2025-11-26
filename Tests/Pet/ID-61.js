let responseBody = pm.response.json();

pm.test("Check status code 404", function(){
    pm.response.to.have.status(400);
});

pm.test("Checking the response code in the response body",function(){
    pm.expect(responseBody.code).to.eql(400);
});

pm.test("Checking the value in the message field",function(){
    pm.expect(responseBody.message).to.eql("Invalid ID supplied");
});