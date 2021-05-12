import Notes from '../models/Note';

export const getNotes = async (req, res) => {
    const notes = await Notes.find();
    res.json(notes);
}

export const getNotesById = (req, res) => {
    res.json({
        message: 'Get - Users Notes Routes by id'
    });
}

export const createNotes = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Note Saved'
    });
}

export const deleteNote = (req, res) => {
    res.json({
        message: 'User - Deleted'
    });
}

export const updateNote = (req, res) => {
    res.json({
        message: 'User -updated'
    });
}