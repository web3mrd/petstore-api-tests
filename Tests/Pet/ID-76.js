let responseBody = pm.response.json();

pm.test("Checking the length of an array equal to 10",function(){
    pm.expect(responseBody.length).to.eql(10);
});