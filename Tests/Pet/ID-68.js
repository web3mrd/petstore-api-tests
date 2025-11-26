let responseBody = pm.response.json();
let acceptablStatuses = ["available", "sold", "pending"];

pm.test("Checking the values of available,sold,pending in the status field in the array of records",function (){
    pm.expect(responseBody).to.be.an("array");
    responseBody.forEach (item => {
        pm.expect(acceptablStatuses).to.include(item.status);
    });
});