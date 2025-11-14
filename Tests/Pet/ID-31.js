let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking the tags field property",function(){
  pm.expect(responseBody.tags).to.be.an("array");
arrayOfTags.forEach (item => {
pm.expect(item).to.have.property("id");
pm.expect(item).to.have.property("name");
});
});