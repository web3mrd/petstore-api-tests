let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking that the name field is absent from the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item).not.to.property("name");
    });
});

pm.test("Checking values in response headers", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.response.headers.get("Connection")).to.eql("keep-alive");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Origin")).to.eql("*");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Methods")).to.eql("GET, POST, DELETE, PUT");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Headers")).to.eql("Content-Type, api_key, Authorization");
    pm.expect(pm.response.headers.get("Server")).to.eql("Jetty(9.2.9.v20150224)");
});