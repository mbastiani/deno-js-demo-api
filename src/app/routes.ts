import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as PersonController from './controllers/PersonController.ts'

const router = new Router()
router
    .get('/persons', PersonController.getPersons)
    .get('/persons/:id', PersonController.getPerson)
    .post('/persons', PersonController.addPerson)
    .patch('/persons/:id', PersonController.updatePerson)
    .delete('/persons/:id', PersonController.deletePerson)

export default router