const exprees = require("express");
const app = exprees();
const port = process.env.PORT || 3000;
app.use(exprees.json());
require("./db/db.connection");
const userRoutes = require("./routes/routes");
app.use(userRoutes);
app.listen(port, console.log(`Connected successfully to ${port}`));
