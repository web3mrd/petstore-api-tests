let responseBody = pm.response.json();

pm.test("Checking the data type value in the photoUrls array", function(){
  pm.expect(responseBody.photoUrls).to.be.a("array");
  responseBody.photoUrls.forEach((item) => {            
    pm.expect(item).to.be.a("string");
  });
  });