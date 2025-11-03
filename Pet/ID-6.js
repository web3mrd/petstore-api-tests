let responseBody = pm.response.json();

pm.test("Check the value in the id field, id is not equal to 0", function(){
  pm.expect(responseBody.id).to.not.eql(0);
});