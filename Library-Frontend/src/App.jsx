import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import MemberForm from "./components/MemberForm"
import MemberList from "./components/MemberList";
import BorrowForm from "./components/BorrowForm";
import BorrowList from "./components/BorrowList";


function App() {

  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(false)
  const [showAddBook, setShowAddBook] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)





  //search

  const [searchText, setSearchText] = useState("")
  const [searchType, setSearchType] = useState("title")



  const [bookCount, setBookCount] = useState(0);


  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isbn, setIsbn] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")



  //add Book

  const addBook = async () => {

    if (title === "" || author === "") {
      alert("Please enter book title and author")
      return;
    }

    const book = {
      title: title,
      author: author,
      isbn: isbn,
      category: category,
      quantity: Number(quantity)
    };
    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert("Book added Successfully");

      fetchBooks();
      fetchBookCount();

      // clear form
      setTitle("")
      setAuthor("")
      setIsbn("")
      setCategory("")
      setQuantity("")

      setShowAddBook(false);
    } else {
      alert("Failed to add book")
    }
  };

  // update Book


  const [updateId, setUpdateId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");
  const [updateIsbn, setUpdateIsbn] = useState("")
  const [updateCategory, setUpdateCategory] = useState("")
  const [updateQuantity, setUpdateQuantity] = useState("")


  const openUpdateForm = (book) => {
    setUpdateId(book.id);
    setUpdateTitle(book.title)
    setUpdateAuthor(book.author)
    setUpdateIsbn(book.isbn)
    setUpdateCategory(book.category)
    setUpdateQuantity(book.quantity)
    setShowUpdate(true)
    setShowBooks(false)
  };


  const updateBook = async () => {
    const updatedBook = {
      title: updateTitle,
      author: updateAuthor,
      isbn: updateIsbn,
      category: updateCategory,
      quantity: Number(updateQuantity)
    };


    const response = await fetch(
      `http://localhost:8080/books/${updateId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBook)
      }
    );
    if (response.ok) {
      const updatedBookData = await response.json();
      alert("Book updated Successfully")
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book.id === updateId
            ? updatedBookData
            : book
        )
      );
      setShowUpdate(false);
      setShowBooks(true)
    } else {
      alert("Failed to update book");
    }
  };


  //  delete function
  const deleteBook = async (id) => {
    const response = await fetch(
      `http://localhost:8080/books/${id}`,
      {
        method: "DELETE"
      }
    );
    if (response.ok) {
      alert("Book deleted successfully")
      setBooks(
        prevBooks.filter(book => book.id !== id)
      );
    }
  }

  //book count

  const fetchBookCount = async () => {
    const response = await fetch("http://localhost:8080/books/count");
    const data = await response.json();
    setBookCount(data);
  };

  //search function

  const searchBooks = async () => {
    if (searchText.trim() === "") {
      fetchBooks();
      return;
    }
    const response = await fetch(
      `http://localhost:8080/books/search/${searchType}/${encodeURIComponent(searchText)}`
    );
    const data = await response.json();
    setBooks(data);
  }

  // fetch all books
  const fetchBooks = async () => {
    const response = await fetch("http://localhost:8080/books");
    const data = await response.json();
    setBooks(data)
  }

  //Add Member

  const [showAddMember, setShowAddMember] = useState(false)
  const [showMembers, setShowMembers] = useState(false)

  const addMember = async (member) => {
    const response = await fetch("http://localhost:8080/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    });
    if (response.ok) {
      alert("Member added successfully")
      fetchMembers();
      setShowAddMember(false);
    } else {
      const error = await response.json();
      alert(error.message || "Failed to add member")
    }
  }

  //Update member

  const [showUpdateMember, setShowUpdateMember] = useState(false);

  const [updateMemebrId, setUpdateMemebrId] = useState(null);
  const [updateStudentName, setUpdateStudentName] = useState("");
  const [updateRollNo, setUpdateRollNo] = useState("");
  const [updateBranch, setUpdateBranch] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  const updateMember = async () => {
    const updatedMemberData = {
      studentName: updateStudentName,
      rollNo: updateRollNo,
      branch: updateBranch,
      phone: updatePhone,
      email: updateEmail
    };


    const response = await fetch(
      `http://localhost:8080/members/${updateMemebrId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMemberData)
      }
    );
    if (response.ok) {
      const updatedMemberData = await response.json();
      alert("Member updated Successfully")
      setMembers(
        members.map(member =>
          member.id === updateMemebrId
            ? updatedMemberData
            : member
        )
      );
      setShowUpdateMember(false);
      setShowMembers(true)
    } else {
      alert("Failed to update member");
    }
  };

  //delete member

  const deleteMember = async (id) => {
    const response = await fetch(
      `http://localhost:8080/members/${id}`,
      {
        method: "DELETE"
      }
    );
    if (response.ok) {
      alert("Member deleted successfully");
      setMembers(prevMembers =>
        prevMembers.filter(member => member.id !== id)
      )
    } else {
      alert("Failed to delete member")
    }
  };

  //Show All Members

  const fetchMembers = async () => {
    const response = await fetch("http://localhost:8080/members")
    const data = await response.json();
    setMembers(data);
  }

  const openUpdateMemberForm = (member) => {
    setUpdateMemebrId(member.id)
    setUpdateStudentName(member.studentName)
    setUpdateRollNo(member.rollNo)
    setUpdateBranch(member.branch)
    setUpdatePhone(member.phone)
    setUpdateEmail(member.email)

    setShowUpdateMember(true)
    setShowMembers(false);
  }

  // borrow states

  //borrow

  const [selectedBook, setSelectedBook] = useState(null);


  const [borrowRecords, setBorrowRecords] = useState([])

  const [showBorrowForm, setShowBorrowForm] = useState(false)
  const [showBorrowRecords, setShowBorrowRecords] = useState(false)

  //fetch borrow Records

  const fetchBorrowRecords = async () => {
    const response = await fetch(
      "http://localhost:8080/borrow"
    );
    const data = await response.json();
    setBorrowRecords(data)
  }

  //borrow Book

  const borrowBook = async (bookId, memberId, dueDate) => {
    const response = await fetch(
      `http://localhost:8080/borrow?bookId=${bookId}&memberId=${memberId}&dueDate=${dueDate}`,
      {
        method: "POST"
      }
    )

    if (response.ok) {
      alert("Book borrowed successfully")
      setShowBorrowForm(false);
      setShowBorrowRecords(false)

      fetchBorrowRecords();
      fetchMembers();
      fetchBookCount();
      fetchBooks();
    } else {
      const error = await response.json(); 
      alert(error.message || "Failed to Borrow book")
    }

  }

  const openBorrowForm =async (book) => {
    setSelectedBook(book)
    setShowBooks(false)
    await fetchMembers()
    setShowBorrowForm(true)
  }

  // return book

  const returnBook = async (id) => {
    const response = await fetch(
      `http://localhost:8080/borrow/${id}/return`,
      {
        method: "PUT"
      }
    );
    if (response.ok) {
      alert("Book returned successfully")
      fetchBorrowRecords();
      fetchBooks();
      fetchBookCount();
    } else {
      const error = await response.text();
      alert(error || "Failed to return book")
    }
  }

  //borrow book effect

  useEffect(() => {
    if (showBorrowRecords) {

      fetchBorrowRecords();
    }
  }, [showBorrowRecords])


  //Effects

  useEffect(() => {
    if (showMembers) {
      fetchMembers();
    }
  }, [showMembers]);

  useEffect(() => {
    fetchBooks();
    fetchBookCount();

  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      fetchBooks();
      return;
    }

    searchBooks();
  }, [searchText, searchType]);

  return (

    <div className="min-h-screen bg-blue-300">

      <h1 className="flex flex-wrap text-center justify-center font-bold text-shadow-2xs ">
        Library Management System
      </h1>

      <Navbar
        setShowBooks={setShowBooks}
        setShowAddBook={setShowAddBook}
        setShowUpdate={setShowUpdate}
        setShowAddMember={setShowAddMember}
        setShowMembers={setShowMembers}

        //borrow book
        setShowBorrowForm={setShowBorrowForm}
        setShowBorrowRecords={setShowBorrowRecords}
      />

      {(showAddBook || showUpdate) && (
        <BookForm
          showAddBook={showAddBook}
          //Add Book
          title={title}
          setTitle={setTitle}

          author={author}
          setAuthor={setAuthor}

          isbn={isbn}
          setIsbn={setIsbn}

          category={category}
          setCategory={setCategory}

          quantity={quantity}
          setQuantity={setQuantity}

          //update book

          updateTitle={updateTitle}
          setUpdateTitle={setUpdateTitle}

          updateAuthor={updateAuthor}
          setUpdateAuthor={setUpdateAuthor}

          updateIsbn={updateIsbn}
          setUpdateIsbn={setUpdateIsbn}

          updateCategory={updateCategory}
          setUpdateCategory={setUpdateCategory}

          updateQuantity={updateQuantity}
          setUpdateQuantity={setUpdateQuantity}

          //Fumctions

          addBook={addBook}
          updateBook={updateBook}
        />
      )}

      {
        (showAddMember || showUpdateMember) && (
          <MemberForm

            addMember={addMember}
            updateMember={updateMember}
            isUpdate={showUpdateMember}

            updateStudentName={updateStudentName}
            setUpdateStudentName={setUpdateStudentName}

            updateRollNo={updateRollNo}
            setUpdateRollNo={setUpdateRollNo}

            updateBranch={updateBranch}
            setUpdateBranch={setUpdateBranch}

            updatePhone={updatePhone}
            setUpdatePhone={setUpdatePhone}

            updateEmail={updateEmail}
            setUpdateEmail={setUpdateEmail}


          />
        )}

      {
        showBorrowForm && (
          <BorrowForm
            books={books}
            members={members}
            borrowBook={borrowBook}
            selectedBook={selectedBook}
          />
        )
      }
      {
        showBorrowRecords && (
          <BorrowList
            borrowRecords={borrowRecords}
            returnBook={returnBook}
          />
        )
      }

      {
        showMembers && (
          <MemberList
            members={members}
            openUpdateMemberForm={openUpdateMemberForm}
            deleteMember={deleteMember}
          />
        )
      }

      {showBooks && (
        <BookList
          books={books}
          bookCount={bookCount}
          openUpdateForm={openUpdateForm}
          deleteBook={deleteBook}
          searchText={searchText}
          setSearchText={setSearchText}
          searchType={searchType}
          setSearchType={setSearchType}
          fetchBooks={fetchBooks}
          openBorrowForm={openBorrowForm}
        />
      )}

    </div>
  );
}

export default App;