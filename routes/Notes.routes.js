const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Notes = require("../models/Notes.model");
const Notes = require("../models/Notes.model");

router.get("/", async (req, res) => {
  try {
    const Notes = await Notes.find();
    res.status(200).json(Notes);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:notesId", async (req, res) => {
  console.log(req.params);
  const Notes = await Notes.findById(req.params.notesId);
  res.json(Notes);
});

router.post("/new", isAuthenticated, async (req, res) => {
  try {
    console.log(req.body, req.payload);
    const newNotes = await Notes.create({
      user: req.payload.userId,
      text: req.body.text,
    });
    console.log("here is your notes", newNotes);
    res.status(201).json(newNotes);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:notesId", async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.notesId);
    res.status(202).json({ message: "notes has been deleted" });
    console.log("all good");
  } catch (err) {
    console.log(err);
  }
});

// complete the notes
router.get("/:notesId", async (req, res) => {
  const Notes = await Notes.findById(req.params.notesId);
  Notes.complete = !Notes.complete;
  Notes.save();
  res.json(Notes);
});

router.post("/edit/:notesId", async (req, res) => {
  try {
    const payload = req.body;
    const updatedNotes = await Notes.findByIdAndUpdate(
      req.params.notesId,
      {
        text: req.body.updateNotes,
      },
      { new: true }
    );
    console.log("updatedNotes", updatedNotes);

    const newNotes = await Notes.find({ user: updatedNotes.user });
    console.log("ok?", newNotes);
    res.status(200).json({ AllNotes: newNotes });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
