let responseBody = pm.response.json();

pm.test("Checking that the “id” field is absent in the “category” object", function(){
    pm.expect(responseBody.category).to.not.have.property("id");
});
