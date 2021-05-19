import Note from '../models/Note';

export const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

export const getNotesById = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

export const createNotes = async (req, res) => {

    const {title, content, date, author } = req.body;

    const newNote = new Note({
        title,
        content,
        author,
        date
    });

    await newNote.save();

    res.json({
        message: 'Note Saved'
    });
}

export const deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id:req.params.id})
    res.json({
        message: 'Note - Deleted'
    });
}

export const updateNote = async (req, res) => {
    const {title, content, author } = req.body;
    await Note.findOneAndUpdate({_id:req.params.id}, {
        title,
        content,
        author
    });

    res.json({
        message: 'Note - updated'
    });
}