const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from the frontend
    methods: "GET,POST,PUT,DELETE", // Specify the allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Specify the allowed headers
  })
);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcom to Inkredible api - node", status: true });
});

const authRouters = require("./routes/auth.routes.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.routes.js");
app.use("/api/users", userRouters);

const productRouters = require("./routes/product.routes.js");
app.use("/api/products", productRouters);

const adminProductRouters = require("./routes/adminProduct.routes.js");
app.use("/api/admin/products", adminProductRouters);

const cartRouters = require("./routes/cart.routes.js");
app.use("/api/cart", cartRouters);

const cartItemRouters = require("./routes/cartItem.routes.js");
app.use("/api/cart/item", cartItemRouters);

const orderRouters = require("./routes/order.routes.js");
app.use("/api/orders", orderRouters);

const adminOrderRouters = require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders", adminOrderRouters);

const reviewRouters = require("./routes/review.routes.js");
app.use("/api/reviews", reviewRouters);

const ratingRouters = require("./routes/rating.routes.js");
app.use("/api/ratings", ratingRouters);

const categoryRoutes = require("./routes/category.routes.js");
app.use("/api/categories", categoryRoutes);


module.exports = app;
