import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as BookController from './controllers/BookController.ts'
import * as PersonController from './controllers/PersonController.ts'

const router = new Router()
router
    .get('/persons', PersonController.getPersons)
    .get('/books/:isbn', BookController.getBook)
    .post('/persons', PersonController.addPerson)
    .patch('/persons/:id', PersonController.updatePerson)
    .delete('/books/:isbn', BookController.deleteBook)

export default router