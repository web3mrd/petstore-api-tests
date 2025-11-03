let responseBody = pm.response.json();

pm.test("Checking for a value of 0 in the id field in the category object", function(){
    pm.expect(responseBody.category.id).to.eql(0);
});