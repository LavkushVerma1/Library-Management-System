function Navbar({ 
  setShowBooks, 
  setShowAddBook, 
  setShowUpdate,
  setShowAddMember,
  setShowMembers,
  setShowBorrowForm,
  setShowBorrowRecords
}) {

  const closeAll=()=>{
    setShowBooks(false);
    setShowAddBook(false);
    setShowUpdate(false);
    setShowAddMember(false);
    setShowMembers(false);
    setShowBorrowForm(false);
    setShowBorrowRecords(false);

  }

  return (
    <div className="flex justify-center gap-5 mt-8">

      <button
        onClick={() => {
          closeAll();
          setShowAddBook(true)
        }}
        className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        Add Book
      </button>

      <button
        onClick={() => {
          closeAll();
          setShowBooks(true)
        }}
        className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        View All Books
      </button>

      <button
      onClick={()=>{
          closeAll();
          setShowAddMember(true)

      }}
      className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        Add Member

      </button>

      <button
      onClick={()=>{
        closeAll();
        setShowMembers(true)
      }}
      className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        View All Members

      </button>

      {/* Borrow button */}

      <button
      onClick={()=>{
        closeAll();
        setShowBorrowForm(true)
      }}
      className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        Borrow Book

      </button>
      <button
      onClick={()=>{
        closeAll();
        setShowBorrowRecords(true)
      }}
      className="border border-black px-4 py-2 rounded-lg bg-white font-bold"
      >
        Borrow Records

      </button>

    </div>
  )
}

export default Navbar