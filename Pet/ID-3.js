pm.test("Checking for the presence of the ID field in the response body", function(){
let responseBody = pm.response.json();
pm.expect(responseBody).to.have.property("id");
});