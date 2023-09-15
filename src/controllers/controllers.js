const Book = require("../models/bookmodel");

// addaBook, listAllBooks, updateAnAuthor, updateGenre, deleteaBook

async function addaBook(req, res) {
    console.log("The req bosy is:",req.body)
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            ISBN: req.body.ISBN
        })

        const successResponse = {
            message: "Book added",
            newBook: newBook
        };

        res.status(201).json(successResponse);

    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
};

const listAllBooks = async(req,res) => {
    try {
        const listOfBooks = await Book.find({});

        const successResponse = {
            message: "Success",
            books: listOfBooks
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);    
    }
};

const updateAnAuthor = async(req,res) => {
    try {
        const authorUpdate = await Book.updateOne({
            author: req.body.author
        })
        const successResponse = {
            message: "Author updated",
            authorUpdate: authorUpdate
        };

        res.status(201).json(successResponse);

    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occured",
            error: error
        };
        res.status(501).json(errorResponse);
    }
};

const deleteaBook = async(req,res) => {
    try {
        const removeBook = await Book.deleteOne({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        })

        const successResponse = {
            message: "Book Deleted",
            Book: removeBook
        };
        res.status(200).json(successResponse)

    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occured",
            error: error
        };
        res.status(501).json(errorResponse);
    }
};

const updateBookByIdSearch = async(req,res) => {
    try {
        const searchBook = await Book.findById(req.params.id);

        if(!searchBook) {
            const bookNotFound = {
                message: "Book not found",
                id: req.params.id
            };
            res.status(404).json(bookNotFound);
        } else {
            const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

            const successResponse = {
                message: "Book has been updated",
                searchBook: updateBook
            };
            res.status(200).json(successResponse);
        }
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occured",
            error: error
        };
        res.status(501).json(errorResponse);
    }
}

const deleteAllBooks = async (req,res) => {
    try {
        const deleteBooks = await Book.deleteMany({});

        const successResponse = {
            message: "All books have been deleted",
            books: deleteBooks
        };
        res.status(200).json(successResponse);

    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
};

const updateTitleBySearch = async (req,res) => {
    try {
        const titleSearch = await Book.find({ title: req.body.title});
        
        if (!titleSearch) {
            const bookNotFound = {
                message: "Book not found",
                title: req.body.title
            };
            res.status(404).json(bookNotFound);
        } else {
            const updateaTitle = await Book.updateOne({
                author: req.body.author,
                new: true
            });
            const successResponse = {
                message: "Found book",
                updateaTitle: updateaTitle 
            };
            res.status(200).json(successResponse);
        }        
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
}


const updateAuthorBySearch = async (req,res) => {
    try {
        const authorSearch = await Book.find({ title: req.body.author});
        
        if (!authorSearch) {
            const bookNotFound = {
                message: "Book not found",
                author: req.body.author
            };
            res.status(404).json(bookNotFound);
        } else {
            const updateAuthor = await Book.updateOne({
                author: req.body.author,
                new: true
            });
            const successResponse = {
                message: "Found Author",
                updateAuthor: updateAuthor 
            };
            res.status(200).json(successResponse);
        }        
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
}
module.exports = { addaBook, listAllBooks, deleteaBook, updateAnAuthor, updateBookByIdSearch, deleteAllBooks, updateTitleBySearch, updateAuthorBySearch }

