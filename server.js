const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors')
const Pizzas = require("./data/pizza-data");
const Pizza = require("./models/pizzaModel");
const connectDB = require("./config/config");
const morgan = require("morgan");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());






// Pizza.insertMany(Pizzas)
//   .then((result) => {
//     console.log(`${result.length} pizzas inserted successfully.`);
//   })
//   .catch((error) => {
//     console.error('Error inserting pizzas:', error);
//   })
 









//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server vai nodemon</h1>");
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(
    `Server Running On  on port no ${process.env.PORT}`
  );
});
