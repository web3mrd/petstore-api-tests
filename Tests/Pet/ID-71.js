let responseBody = pm.response.json();
let acceptablStatuses = ["sold", "pending"];

pm.test("Checking the values pending, sold in the status field in the array", function(){
    pm.expect(responseBody).to.be.an("array");
    responseBody.forEach (item => {
        pm.expect(item.status).to.be.oneOf(acceptablStatuses);
    });
});