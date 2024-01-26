import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended : true}));

//view engine setup
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

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