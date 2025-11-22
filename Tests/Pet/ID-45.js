let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("checking for an empty value in the name field of the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item.name).to.eql("");
    });
});