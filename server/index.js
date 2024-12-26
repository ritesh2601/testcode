import express from "express"
import cors from "cors"

const app = express();
const PORT = 1000;

const corsConfig = {
    "origin":"*",
    "method":"*",
    "allowedHeaders":["*"]
}
app.use(cors(corsConfig));
app.use(express.json());


app.get("/", (req,res) =>{

    res.send("Hello From Server, How are you");
})

app.post("/user",(req,res) =>{ 
    const { user } = req.body;
    console.log(user);
    res.status(200).send("Data recieved")
})

app.listen(PORT, () =>{
    console.log("server is listing on PORT",PORT);
})