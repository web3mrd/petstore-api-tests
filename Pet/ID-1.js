let response = pm.response.json();
let petId = response.id;
pm.collectionVariables.set("petId", petId);

let requestBody = pm.request.body.raw
requestBody = JSON.parse(requestBody);
let responseBody = pm.response.json();
pm.test("Comparison of data from the request body in the response body", function(){
    pm.expect(requestBody.id).to.eql(responseBody.id);
    pm.expect(requestBody.category.id).to.eql(responseBody.category.id);
    pm.expect(requestBody.category.name).to.eql(responseBody.category.name);
    pm.expect(requestBody.name).to.eql(responseBody.name);
    pm.expect(requestBody.photoUrls).to.eql(responseBody.photoUrls);
    pm.expect(requestBody.tags).to.eql(responseBody.tags);
    pm.expect(requestBody.status).to.eql(responseBody.status);
});

pm.test("Status code 200 or 405", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 405]);
});