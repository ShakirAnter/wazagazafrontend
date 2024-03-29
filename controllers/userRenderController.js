const path = require("path");

const RenderHomePage = (req, res) => {
  // res.sendFile(path.join(__dirname, "../public/index.ejs"));
  res.render("index.ejs");
};
const RenderAboutPage = (req, res) => {
  // res.sendFile(path.join(__dirname, "../public/about.ejs"));
  res.render("about.ejs");
};
const RenderContactPage = (req, res) => {
  // res.sendFile(path.join(__dirname, "../public/contact.ejs"));
  res.render("contact.ejs");
};
const RenderGalleryPage = (req, res) => {
  // res.sendFile(path.join(__dirname, "../public/gallery.ejs"));
  res.render("gallery.ejs");
};

module.exports = {
  RenderHomePage,
  RenderAboutPage,
  RenderContactPage,
  RenderGalleryPage,
};
