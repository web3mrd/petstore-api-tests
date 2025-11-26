let responseBody = pm.response.json();
let acceptablStatuses = ["pending", "available"];

pm.test("Checking the values pending, available in the status field in the array", function(){
    pm.expect(responseBody).to.be.an("array");
    responseBody.forEach (item => {
        pm.expect(item.status).to.be.oneOf(acceptablStatuses);
    });
});