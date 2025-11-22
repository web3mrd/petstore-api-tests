let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;
pm.test("Checking for the absence of the id field in the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item).not.to.property("id");
    });
});