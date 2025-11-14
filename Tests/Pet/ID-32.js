let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking the length of the tags array", function(){
pm.expect(arrayOfTags.length).to.eql(1);
});