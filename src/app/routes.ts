import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as PersonController from './controllers/PersonController.ts'
import * as CepController from './controllers/CepController.ts'

const router = new Router()
router
    .get('/persons', PersonController.getPersons)
    .get('/persons/:id', PersonController.getPerson)
    .post('/persons', PersonController.addPerson)
    .patch('/persons/:id', PersonController.updatePerson)
    .delete('/persons/:id', PersonController.deletePerson)

    .get('/addresses/:cep', CepController.getAddress)

export default router