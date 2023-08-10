require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const defaultPort = 8080;
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/resetPassword");
const pizzasRoute = require("./routes/pizzaRoutes");
const myoPizzaRoute = require("./routes/mypizza");
const paymentRoute = require("./routes/payment");
// db connection
connection();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/pizzas", pizzasRoute);
app.use("/api/mypizza", myoPizzaRoute);
app.use("/api/payment", paymentRoute);

const port = process.env.PORT || defaultPort;
app.listen(port, () => console.log(`Server running on port ${port}`));
