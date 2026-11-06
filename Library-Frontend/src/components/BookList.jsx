function BookList({ 
  books, 
  bookCount, 
  openUpdateForm, 
  deleteBook, 
  searchText, 
  setSearchText, 
  searchType, 
  setSearchType, 
  fetchBooks,
  openBorrowForm
}) {

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">


      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            All Books
          </h2>
          <p className="text-white font-bold mt-1">
            {bookCount} books in the library
          </p>
        </div>
      </div>



      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3">

          <input type="text"
            placeholder="Search books..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:border-blue-500"
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border border-black rounded px-3 py-2"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>

          <button
            onClick={() => {
              setSearchText("");
              fetchBooks();
            }}
            className="border border-black px-4 py-2 rounded bg-gray-300"
          >
            Clear
          </button>
        </div>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">

        {books.map(book => (

          <div
            key={book.id}
            className="w-full min-h-48 rounded-lg border border-gray-800 p-4 flex flex-col bg-gray-100 hover:bg-gray-200 transition shadow-sm"
          >

            <p>Book Id: {book.id}</p>

            <h3 className="text-lg font-bold text-gray-800">
              Book Title: {book.title}
            </h3>

            <p className="text-gray-950 font-semibold">
              Author: {book.author}
            </p>
            <p className="text-gray-950 font-semibold">
              Isbn: {book.isbn}
            </p>
            <p className="text-gray-950 font-semibold">
              Category: {book.category}
            </p>
            <p className="text-gray-950 font-semibold">
              Quantity: {book.quantity}
            </p>
            <p className="text-gray-950 font-semibold">
              Available: {book.available}
            </p>

            <div className="flex gap-2 mt-auto">

              <button
                onClick={() => openUpdateForm(book)}
                className="border border-gray-800 px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-600 transition"
              >
                Update
              </button>

              <button
                onClick={() => deleteBook(book.id)}
                className="border border-gray-800 px-4 py-2 rounded-lg bg-red-400 hover:bg-red-500 transition"
              >
                Delete
              </button>

              <button
                onClick={()=>{
                  openBorrowForm(book);
                  
                }}
                disabled={book.available<=0}
                className="border border-black px-4 py-2 rounded-lg bg-blue-500 disabled:bg-gray-400"
              >
                Borrow
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default BookList