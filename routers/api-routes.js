// Initialize express router
// app.METHOD(PATH, HANDLER)
const router = require("express").Router();

const contact = require("../controllers/contactController");

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API it's Working",
    message: "Welcome to resthub crafted with love"
  });
});

router.post("/contact", contact.createContact);
router.get("/contacts", contact.getAllContact);
router.get("/contact/:id", contact.getContactById);
router.put("/contact/:id", contact.editContact)
router.delete("/contact/:id", contact.deleteContact);

module.exports = router;
