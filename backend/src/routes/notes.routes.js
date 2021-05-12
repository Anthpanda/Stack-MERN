import {Router} from 'express';
const router = Router();

import * as notesCtrl from '../controllers/notes.controller'

router.get('/', notesCtrl.getNotes);

router.get('/:id', notesCtrl.getNotesById);

router.post('/', notesCtrl.createNotes);

router.put('/:id', notesCtrl.updateNote);

router.delete('/:id', notesCtrl.deleteNote);

export default router;