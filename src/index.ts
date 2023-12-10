import dotenv from "dotenv"
import express from 'express'
import router from "./routes/routes";
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config()
const app = express();
const port = process.env.PORT || 4000;

//to solve cors issues
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello, Backend running !!');
});

app.use('/api', router);
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
