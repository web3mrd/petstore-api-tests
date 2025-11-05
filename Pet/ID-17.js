let responseBody = pm.response.json();

pm.test("Checking for absence of object category", function(){
    pm.expect(responseBody).to.not.have.property("category");
});