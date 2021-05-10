import {Router} from 'express';
const router = Router();

import * as notesCtrl from '../controllers/notes.controller'

router.get('/', notesCtrl.getNotes);

export default router;