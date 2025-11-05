let responseBody = pm.response.json();

pm.test("Checking for an empty value in the name field", function (){
    pm.expect(responseBody.name).to.eql("");
});