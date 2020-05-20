import { IBook } from '../src/models/BookModel.ts'

let books: Array<IBook> = [{
    id: "1",
    isbn: "1",
    author: "Robin Wieruch",
    title: "The Road to React",
}, {
    id: "2",
    isbn: "2",
    author: "Kyle Simpson",
    title: "You Don't Know JS: Scope & Closures",
}, {
    id: "3",
    isbn: "3",
    author: "Andreas A. Antonopoulos",
    title: "Mastering Bitcoin",
}]

export { books }