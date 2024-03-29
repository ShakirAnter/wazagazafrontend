const express = require("express");
const Router = express.Router();

const {
  RenderHomePage,
  RenderAboutPage,
  RenderContactPage,
  RenderGalleryPage,
} = require("../controllers/userRenderController");

const { sendMessage } = require("../controllers/userController");

Router.route("/").get(RenderHomePage);
Router.route("/about").get(RenderAboutPage);
Router.route("/contact").get(RenderContactPage).post(sendMessage);
Router.route("/gallery").get(RenderGalleryPage);

module.exports = Router;
