let responseBody = pm.response.json();
let petName = responseBody.name;

pm.test("Checking the lower case of the value in the name field", function(){
    let partOfName = petName.charAt(0).toUpperCase() + petName.slice(1).toLowerCase();
    pm.expect(petName).to.eql(partOfName);
});

pm.test("Checking values in response headers", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.response.headers.get("Connection")).to.eql("keep-alive");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Origin")).to.eql("*");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Methods")).to.eql("GET, POST, DELETE, PUT");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Headers")).to.eql("Content-Type, api_key, Authorization");
    pm.expect(pm.response.headers.get("Server")).to.eql("Jetty(9.2.9.v20150224)");
});