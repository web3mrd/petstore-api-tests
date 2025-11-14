let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking the length of the tag array = 0", function(){
pm.expect(arrayOfTags.length).to.eql(0);
});