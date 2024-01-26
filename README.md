# Advanced Bank Website

Welcome to the Advanced Bank project! This is a full-stack banking website where clients can register, manage their accounts, and perform transactions. Employees and managers have additional functionalities for account and employee management.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Client Dashboard:** View account details, transaction history, etc.
- **Employee Panel:** Manage client accounts, transactions, and other related activities.
- **Manager Panel:** Perform employee tasks and oversee managerial responsibilities.
- **Secure Transactions:** Prioritize the security of financial transactions.

## Tech Stack

- **Front End:**
  - HTML
  - CSS (TailWind , BootStrap)
  - JavaScript

- **Back End:**
  - Node.js
  - Express.js
  - EJS
  - MySQL

## Setup

# 1. Clone the repository.
   ```bash
   git clone https://github.com/TeerthaDeb/Advanced-Bank-Management-System--FullStack-
   ```


# 2. Install dependencies.
```bash
npm install express
npm install ejs
npm install body-parser
npm install mysql
```
# 3. Set up the database (ensure MySQL is installed).
## Table Name:
  make sure your table name is : 
    ```
    advancedbankmanagement
    ```
## For Clients table:
```bash
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(10),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    occupation VARCHAR(100),
    placeOfOccupation VARCHAR(100),
    birthDay INT,
    birthMonth INT,
    birthYear INT,
    streetAddress VARCHAR(255),
    additionalInformation TEXT,
    zipCode VARCHAR(20),
    place VARCHAR(100),
    country VARCHAR(100),
    countryCode VARCHAR(10),
    phoneNumber VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    accountCreatedBy INT,
    lastAccountModifiedBy INT,
    lastIssueWithID INT,
    checkingAccounts INT,
    savingAccounts INT,
    visas INT,
    masterCards INT,
    checkAccountNumber VARCHAR(20),
    savingAccountNumber VARCHAR(20),
    creditCardNumber VARCHAR(20),
    checkingAccountBalance DECIMAL(15, 2),
    savingAccountBalance DECIMAL(15, 2),
    creditCardBalance DECIMAL(15, 2),
    accountCreationDate DATE
);
```



```bash
npm start
```

# 4. Access the website at http://localhost:3000.

# 5. Usage
## Navigate to http://localhost:3000 in your web browser.
Register a new account, or log in if you are an existing user.
Explore the client dashboard, employee panel, and manager panel.
Contributing
If you would like to contribute to this project, please follow the guidelines in CONTRIBUTING.md.

# 6. License
This project is licensed under the MIT License.
