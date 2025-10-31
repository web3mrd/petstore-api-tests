let response = pm.response.json();
let petId = response.id;
pm.collectionVariables.set("petId", petId);

pm.test("JSON schema validation", function () {
    let schemaPet = {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "category": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "required": ["id", "name"]
            },
            "name": {
                "type": "string",
                "example": "doggie"
            },
            "photoUrls": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": ["id", "name"]
                }
            },
            "status": {
                "type": "string",
                "enum": ["available", "pending", "sold"]
            }
        },
        "required": ["name", "photoUrls"]
    };
    pm.response.to.have.jsonSchema(schemaPet);
});

pm.test("Checking values in request headers", function () {
    pm.expect(pm.request.headers.get("accept")).to.eql("application/json");
    pm.expect(pm.request.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.request.headers.get("Cache-Control")).to.eql("no-cache");
    pm.expect(pm.request.headers.get("Host")).to.eql("petstore.swagger.io");
    pm.expect(pm.request.headers.get("Connection")).to.eql("keep-alive");
});

pm.test("Checking values in response headers", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
    pm.expect(pm.response.headers.get("Connection")).to.eql("keep-alive");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Origin")).to.eql("*");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Methods")).to.eql("GET, POST, DELETE, PUT");
    pm.expect(pm.response.headers.get("Access-Control-Allow-Headers")).to.eql("Content-Type, api_key, Authorization");
    pm.expect(pm.response.headers.get("Server")).to.eql("Jetty(9.2.9.v20150224)");
});

pm.test("Status code 200 or 405", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 405]);
});

pm.test("Checking the error message", function () {
    if (pm.response.code == 405) {
        pm.expect(response.massage).to.eql("Invalid input")
    };
});

pm.test("Request time check", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

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