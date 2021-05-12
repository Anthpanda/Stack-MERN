import {Router} from 'express';
const router = Router();

import * as notesCtrl from '../controllers/users.controller'

router.get('/', notesCtrl.getUsers);

router.post('/', notesCtrl.createUsers);

router.delete('/:id', notesCtrl.deleteUser);

export default router;
