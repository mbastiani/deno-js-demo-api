import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as PersonController from './controllers/PersonController.ts'

const router = new Router()
router
    .get('/persons', PersonController.getPersons)
    .post('/persons', PersonController.addPerson)
    .patch('/persons/:id', PersonController.updatePerson)

export default router