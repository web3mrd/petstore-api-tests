pm.test("Check status code 405", function(){
    pm.response.to.have.status(405);
});

pm.test("Checking the value in the message field", function(){
    pm.expect(responseBody.message).to.eql("Invalid input");
});

