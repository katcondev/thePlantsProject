const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/learn", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/learn.html"));
});

router.get("/mentor", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/mentor.html"));
});

router.get("/submissions", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/submissions.html"));
});

router.get("/database", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/database.html"));
});

module.exports = router;
