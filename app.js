const http = require("http");
const express = require("express");
const path = require("path");
const rootPath = require("./util/path");
const bodyParser = require("body-parser");

const app = express();

//setup routes
const homeRoutes = require("./routes/home");
const aboutRoutes = require("./routes/about");
const contactRoutes = require("./routes/contact");
const servicesRoutes = require("./routes/services");
const projectsRoutes = require("./routes/projects");

const server = http.createServer(app);

//set EJS as the templating engine
app.set("view engine", "ejs");

app.use(express.static(path.join(rootPath, "public")));
app.use(express.static(path.join(rootPath, "node_modules/bootstrap/dist/css")));
app.use(bodyParser.urlencoded({ extended: false }));

//setup routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);
app.use(servicesRoutes);
app.use(projectsRoutes);

//setup 404 page
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

server.listen(3000);
