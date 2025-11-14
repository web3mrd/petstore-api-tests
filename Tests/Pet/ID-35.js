let responseBody = pm.response.json();

pm.test("Checking for the absence of the tags field", function(){
  pm.expect(responseBody).to.not.have.property("tags");
});