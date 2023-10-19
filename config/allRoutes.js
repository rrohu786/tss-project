const routes = require("express").Router();


routes.use("/api/city",require("../controllers/CityController"));
routes.use("/api/user",require("../controllers/UserController"));
routes.use("/api/user/auth",require("../controllers/UserAuthController"));
routes.use("/api/blogs",require("../controllers/BlogController"));
routes.use("/api/category",require("../controllers/CategoryController"));
routes.use("/api/admin/auth",require("../controllers/AdminAuthController"));
routes.use("/api/image",require("../controllers/ImageController"));
routes.use("/api/students",require("../controllers/StudentController"));


module.exports = routes;
    