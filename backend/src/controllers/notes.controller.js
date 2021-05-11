export const getNotes = (req, res) => {
    res.json({
        message: 'Get - Users Routes'
    });
}

export const getNotesById = (req, res) => {
    res.json({
        message: 'Get - Users Routes by id'
    });
}

export const createNotes = (req, res) => {
    res.json({
        message: 'Post - Users Routes'
    });
}

export const deleteNotes = (req, res) => {
    res.json({
        message: 'Note - Deleted'
    });
}

export const updateNotes = (req, res) => {
    res.json({
        message: 'Note -updated'
    });
}