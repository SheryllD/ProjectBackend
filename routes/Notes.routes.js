const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Notes = require("../models/Notes.model");

router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:noteId", async (req, res) => {
  console.log(req.params);
  const oneNote = await Notes.findById(req.params.noteId);
  res.json(oneNote);
});

router.post("/new", isAuthenticated, async (req, res) => {
  try {
    console.log(req.body, req.payload);
    const newNote = await Notes.create({
      user: req.payload.userId,
      text: req.body.text,
    });
    console.log("here is your notes", newNote);
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:noteId", async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.noteId);
    res.status(202).json({ message: "notes has been deleted" });
    console.log("all good");
  } catch (err) {
    console.log(err);
  }
});

//  complete the notes
//  router.get("/:notesId", async (req, res) => {
//  const Notes = await Notes.findById(req.params.notesId);
//  Notes.complete = !Notes.complete;
//  Notes.save();
//  res.json(Notes);
// });

router.post("/edit/:noteId", async (req, res) => {
  try {
    const payload = req.body;
    const updatedNotes = await Notes.findByIdAndUpdate(
      req.params.noteId,
      {
        text: req.body.updateNote,
      },
      { new: true }
    );
    console.log("updatedNotes", updatedNotes);

    const newNote = await Notes.find({ user: updatedNotes.user });
    console.log("ok?", newNote);
    res.status(200).json({ AllNotes: newNote });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
