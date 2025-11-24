let responseBody = pm.response.json();

pm.test("Checking the value of sold in the status field",function(){
    pm.expect(responseBody.status).to.eql("sold");
});