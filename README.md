# Petstore API Test Automation

### Project Overview

This project is part of my portfolio and showcases automated tests for the public [Swagger Petstore API](https://petstore.swagger.io/#/).  
It demonstrates how I organize and automate API tests using **Postman** and **JavaScript**.

### How to Use
To run the tests:
1. Download the collection file — **`petstore-api-tests.postman_collection.json`**  
2. Import it into **Postman**  
3. Run the collection or individual requests as needed

The project includes automated tests for the following modules:
- **Pet**
- **Store**
- **User**

Each test file corresponds to a specific test case ID from the checklist below.

### Project Structure
``` 
petstore-api-tests/
│
├── petstore-api-tests.postman_collection.json # Postman collection
│
├── Pet/
│ ├── ID-01.js # Example test for the Pet module
│ └── ...
│
├── Store/
│ └── ...
│
└── User/
└── ...
```
Each `ID-XX.js` file corresponds to a test case ID from the checklist.

### Test Case Checklist
The full list of test cases with their IDs and descriptions is available here:  
[Petstore API Test Checklist (Google Sheets)](https://docs.google.com/spreadsheets/d/12en02kxP7006esEzlo3PgBDH4ipbU2V_Ev0Svo3SPKw/edit?usp=sharing)

### Project Purpose
This project was created as part of my learning process while exploring **API testing with Postman**.  
It showcases the practical application of concepts like test design, scripting with JavaScript, and working with live API documentation.  
The main goal is to demonstrate a solid foundation for building automated API tests in a clear and structured way.

### Tech Stack
- **Postman** — API testing platform  
- **JavaScript (pm API)** — Test scripting  
- **Swagger Petstore API** — Open API under test  

---

### Author
**Dmitrii Okunev**  
Manual QA Engineer  
[Telegram](https://t.me/twe3dep)
