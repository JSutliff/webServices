const path = require("path");

var router = require("express").Router();

router.get("/domain-with-ssl", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/domain-with-ssl.html"));
});

router.get("/web-design", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/website-design.html"));
});

router.get("/business-website-solutions", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/websites.html"));
});

router.get("/local-seo", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/local-seo.html"));
});

router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

router.get("/blog/web-design-announcement", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public/blog-web-design-announcement.html")
  );
});

router.get("/sitemap", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sitemap.xml"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
