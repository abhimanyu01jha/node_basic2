// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm } from "./src/controllers/blog.controller";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
//app.use(express.urlencoded({extended: true}))
// Write your code here

// const blogController = require("./controllers/blog.controller");
// app.get("/createblog", blogController.renderBlogForm);
app.get('/createblog',renderBlogForm);

export default app;
