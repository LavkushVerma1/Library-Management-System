function BookForm({

  showAddBook,

  title,
  setTitle,

  author,
  setAuthor,

  isbn,
  setIsbn,

  category,
  setCategory,

  quantity,
  setQuantity,



  updateTitle,
  setUpdateTitle,

  updateAuthor,
  setUpdateAuthor,

  updateIsbn,
  setUpdateIsbn,

  updateCategory,
  setUpdateCategory,

  updateQuantity,
  setUpdateQuantity,

  addBook,
  updateBook

}) {

  return (
    <div className="flex flex-col items-center gap-3 mt-8">

      <h2>
        {showAddBook ? "Add Book" : "Update Book"}
      </h2>

      <input
        type="text"
        placeholder="Enter book title"
        value={showAddBook ? title : updateTitle}
        onChange={(e) =>
          showAddBook
            ? setTitle(e.target.value)
            : setUpdateTitle(e.target.value)
        }
        className="border border-black p-2 bg-white rounded"
      />

      <input
        type="text"
        placeholder="Enter author"
        value={showAddBook ? author : updateAuthor}
        onChange={(e) =>
          showAddBook
            ? setAuthor(e.target.value)
            : setUpdateAuthor(e.target.value)
        }
        className="border border-black bg-white p-2 rounded"
      />
      <input
        type="number"
        placeholder="Enter ISBN"
        value={showAddBook ? isbn : updateIsbn}
        onChange={(e) =>
          showAddBook
            ? setIsbn(e.target.value)
            : setUpdateIsbn(e.target.value)
        }
        className="border border-black bg-white p-2 rounded"
      />
      <input
        type="text"
        placeholder="Enter category"
        value={showAddBook ? category : updateCategory}
        onChange={(e) =>
          showAddBook
            ? setCategory(e.target.value)
            : setUpdateCategory(e.target.value)
        }
        className="border border-black bg-white p-2 rounded"
      />
      <input
        type="number"
        min="1"
        step="1"
        required
        placeholder="Enter quantity"
        value={showAddBook ? quantity : updateQuantity}
        onChange={(e) =>
          showAddBook
            ? setQuantity(e.target.value)
            : setUpdateQuantity(e.target.value)
        }
        className="border border-black bg-white p-2 rounded"
      />

      <button
        onClick={showAddBook ? addBook : updateBook}
        className="border border-black px-4 py-2 rounded-lg bg-blue-500"
      >
        {showAddBook ? "Submit" : "Submit Update"}
      </button>

    </div>
  )
}

export default BookForm