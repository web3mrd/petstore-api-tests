let responseBody = pm.response.json();

pm.test("Checking for a null string value in the name field", function(){
    pm.expect(responseBody.name).to.eql("null");
});