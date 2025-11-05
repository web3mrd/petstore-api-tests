let responseBody = pm.response.json();
let petName = responseBody.name;

pm.test("Checking the lower case of the value in the name field", function(){
  let partOfName = petName.charAt(0).toUpperCase() + petName.slice(1).toLowerCase();
  console.log(partOfName);
  pm.expect(petName).to.eql(partOfName);
});
