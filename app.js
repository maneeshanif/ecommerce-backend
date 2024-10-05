const express = require("express");
const app = express();
const cors = require("cors");

const Users = require("./routes/usersroutes")


app.use(express.json());
app.use(cors());




app.use("/api/users", Users);


app.listen(5000, () => {
    console.log("server is running on port 5000");
});