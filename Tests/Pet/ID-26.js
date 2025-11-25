let responseBody = pm.response.json();

pm.test("Checking for duplicate values in an array", function(){
    pm.expect(responseBody.photoUrls).to.be.a("array");

    let uniqueValue = new Set (responseBody.photoUrls);

    pm.expect(uniqueValue.size).to.be.below(responseBody.photoUrls.length);
});

pm.test("Checking values in response headers", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.response.headers.get("Connection")).to.eql("keep-alive");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Origin")).to.eql("*");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Methods")).to.eql("GET, POST, DELETE, PUT");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Headers")).to.eql("Content-Type, api_key, Authorization");
    pm.expect(pm.response.headers.get("Server")).to.eql("Jetty(9.2.9.v20150224)");
});