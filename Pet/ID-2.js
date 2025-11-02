let responseBody = pm.response.json();

pm.test("Checking required fields in the response body", function (){
let requiredFields = ["id", "name","photoUrls"];
pm.expect(Object.keys(responseBody)).to.eql(requiredFields);
});



