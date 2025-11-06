let responseBody = pm.response.json();

pm.test("Checking for duplicate values in an array", function(){
pm.expect(responseBody.photoUrls).to.be.a("array");

let uniqueValue = new Set (responseBody.photoUrls);

pm.expect(uniqueValue.size).to.be.below(responseBody.photoUrls.length);
});