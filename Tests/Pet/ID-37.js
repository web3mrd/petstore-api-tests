let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking that the name field is absent from the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item).not.to.property("name");
    });
});