let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("checking for “null” in the name field in the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item.name).to.eql("null");
    });
});