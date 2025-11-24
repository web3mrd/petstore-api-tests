let responseBody = pm.response.json();

pm.test("Checking for the absence of the status field", function(){
    pm.expect(responseBody).to.not.have.property("status");
});