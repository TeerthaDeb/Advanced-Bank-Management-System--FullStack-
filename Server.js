import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mysql from 'mysql';



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.json());

//view engine setup
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');


//Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'advancedbankmanagement',
});


db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } 
    else {
        console.log('Connected to the database');
    }
});

//app configure:
app.use('/public', express.static(path.join(__dirname , '/public')));
app.use(express.static(path.join(__dirname, 'public/styles')));


//Routes
app.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { Year: new Date().getFullYear() })
});

app.get("/Client-s-SignUp-Form" , (req, res) =>{
    res.render("Client's SignUp Form" , { Year: new Date().getFullYear() })
});

app.get("/Client-s-LogIn-Form" , (req , res) =>{
    res.render("Client's LogIn" , {Year : new Date().getFullYear()})
});

app.get("/Privacy_Policy" , (req , res) => {
    res.render("Privacy Policy" , {Year : new Date().getFullYear()})
});

app.get("/About-Bank" , (req , res) => {
    res.render("About Advanced Bank" , {
                                            Year : new Date().getFullYear() , 
                                            email : "Advanced_Bank@advncdBank.com"
                                        }
                )
});


//Registering Client:
app.post('/register', (req, res) => {
    const userData = req.body;

    console.log("From server.js : ", userData);

    const sql = `
    INSERT INTO clients (title, firstName, lastName, occupation, placeOfOccupation, birthDay, birthMonth, birthYear, streetAddress, additionalInformation, zipCode, place, country, countryCode, phoneNumber, email, password, accountCreatedBy, lastAccountModifiedBy, lastIssueWithID, checkingAccounts, savingAccounts, visas, masterCards, checkAccountNumber, savingAccountNumber, creditCardNumber, checkingAccountBalance, savingAccountBalance, creditCardBalance, accountCreationDate)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    // Extract values from userData
    const values = [
        userData.title,
        userData.firstName,
        userData.lastName,
        userData.occupation,
        userData.placeOfOccupation,
        userData.birthDay,
        userData.birthMonth,
        userData.birthYear,
        userData.streetAddress,
        userData.additionalInformation,
        userData.zipCode,
        userData.place,
        userData.country,
        userData.countryCode,
        userData.phoneNumber,
        userData.emailAddress,
        userData.password,
        userData.accountCreatedBy,
        userData.lastAccountModifiedBy,
        userData.lastIssueWithID,
        userData.checkingAccounts,
        userData.savingAccounts,
        userData.visas,
        userData.masterCards,
        userData.checkAccountNumber,
        userData.savingAccountNumber,
        userData.creditCardNumber,
        userData.checkingAccountBalance,
        userData.savingAccountBalance,
        userData.creditCardBalance,
        new Date()
    ];

    // Execute the SQL query
    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('User added successfully');
        }
    });
});


