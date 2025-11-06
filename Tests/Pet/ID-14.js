let responseBody = pm.response.json();

pm.test("Checking for an empty value in the name field in the category object", function(){
    pm.expect(responseBody.category.name).to.eql("");
});