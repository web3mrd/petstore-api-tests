// outputting the id from the variable in the console in the pre-request script - for manual verification that the id actually matches
let pet = pm.collectionVariables.get("petId");
console.log(pet);
// post-response test
let pet = pm.collectionVariables.get("petId");
let responseBody = pm.response.json();

pm.test("Checking the receipt of the animal ID recorded in the petId variable",function (){
    pm.expect(pet).to.eql(responseBody.id);
});
