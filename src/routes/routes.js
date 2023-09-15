const {Router} = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const { addaBook, listAllBooks, updateAnAuthor, deleteaBook, updateBookByIdSearch, deleteAllBooks, updateTitleBySearch } = require ("../controllers/controllers");


bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
bookRouter.put("/books/updateAnAuthor", updateAnAuthor);
bookRouter.delete("/books/deleteaBook", deleteaBook);

// Search by ID
bookRouter.put("/books/updateBookByIdSearch/:id", updateBookByIdSearch);

// Deletes all books
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

// Search by title/author
bookRouter.put("/books/updateTitleBySearch", updateTitleBySearch);
bookRouter.put("/books/updateAuthorBySearch", updateAuthorBySearch);

module.exports = bookRouter;