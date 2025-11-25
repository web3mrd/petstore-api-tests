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

pm.test("Checking values in response headers", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.response.headers.get("Connection")).to.eql("keep-alive");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Origin")).to.eql("*");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Methods")).to.eql("GET, POST, DELETE, PUT");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Headers")).to.eql("Content-Type, api_key, Authorization");
    pm.expect(pm.response.headers.get("Server")).to.eql("Jetty(9.2.9.v20150224)");
});