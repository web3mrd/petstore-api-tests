let responseBody = pm.response.json();
let petName = responseBody.name;

pm.test("Checking the lower case of the value in the name field", function(){
pm.expect(petName).to.eql(petName.toLowerCase());
});