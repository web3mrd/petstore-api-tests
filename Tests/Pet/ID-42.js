let responseBody = pm.response.json();
let arrayOfTags = responseBody.tags;

pm.test("Checking for the value 0 in the id field of the tags array", function(){
    pm.expect(responseBody.tags).to.be.an("array");
    arrayOfTags.forEach (item => {
        pm.expect(item.id).to.eql(0);
    });
});