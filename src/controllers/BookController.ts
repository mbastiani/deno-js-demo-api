import { IBook } from '../models/BookModel.ts'
import * as bookData from '../../data/bookData.ts'

let books = bookData.books;

const getBooks = ({ response }: { response: any }) => {
    response.body = { data: books }
}

const getBook = ({ params, response }: { params: { isbn: string }; response: any }) => {
    const book: IBook | undefined = searchBookByIsbn(params.isbn)
    if (book) {
        response.status = 200
        response.body = { data: books[0]}
    } else {
        response.status = 404
        response.body = { message: `Book not found.` }
    }
}

const addBook = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const book: IBook = body.value
    books.push(book)
    response.body = { message: 'OK' }
    response.status = 200
}

const updateBook = async ({ params, request, response }: { params: { isbn: string }; request: any; response: any }) => {
    let book: IBook | undefined = searchBookByIsbn(params.isbn)
    if (book) {
        const body = await request.body()
        const updateInfos: { author?: string; title?: string } = body.value
        book = { ...book, ...updateInfos }
        books = [...books.filter(book => book.isbn !== params.isbn), book]
        response.status = 200
        response.body = { message: 'OK' }
    } else {
        response.status = 404
        response.body = { message: `Book not found` }
    }
}

const deleteBook = ({ params, response }: { params: { isbn: string }; response: any }) => {
    books = books.filter(book => book.isbn !== params.isbn)
    response.body = { message: 'OK' }
    response.status = 200
}

const searchBookByIsbn = (isbn: string): (IBook | undefined) => books.filter(book => book.isbn === isbn)[0]

export { getBooks, getBook, addBook, updateBook, deleteBook }