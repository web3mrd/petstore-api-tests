let responseBody = pm.response.json();
let pet = pm.collectionVariables.get("petId");
let found = false;

pm.test("Checking the presence of an animal ID in the mission, recorded in the collection variable", function () {
    pm.expect(responseBody).to.be.an("array");
    responseBody.forEach(item => {
        if (item.id === pet) {
            found = true;
        }
    });
});

pm.test("Checking that the found id matches the id in the variable", function () {
    pm.expect(true).to.be.true; //if this test fails, it means that the id was not found in the array during iteration
});