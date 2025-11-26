let responseBody = pm.response.json();
const arrayOfAnimalRecords = responseBody;

pm.test("Checking the value of sold in the status field in the array of records",function(){
    pm.expect(responseBody).to.be.an("array");
    arrayOfAnimalRecords.forEach (item => {
        pm.expect(item.status).to.eql("sold");
    });
});