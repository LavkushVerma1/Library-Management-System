import { useState } from "react";

function BorrowForm({ books, members, borrowBook, selectedBook
}) {

    const [bookId, setBookId] = useState(selectedBook ? selectedBook.id.toString() : "");
    const [memberId, setMemberId] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleBorrow = () => {
        if (bookId === "" || memberId === "" || dueDate === "") {
            alert("Please fill all fields");
            return;
        }
        const today = new Date().toISOString().split("T")[0];
        if (dueDate < today) {
            alert("Due date cannot be in the past");
            return;
        }

        borrowBook(bookId, memberId, dueDate);

        setBookId("")
        setMemberId("")
        setDueDate("")
    }

    return (

        <div className="flex flex-col items-center gap-4 mt-8">

            <h2 className="text-2xl font-bold">
                Borrow Book
            </h2>

            <select
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                className="border border-black p-2 bg-white rounded w-72"
            >

                <option value="">
                    Select Book
                </option>
                {books.map(book => (

                    <option
                        key={book.id}
                        value={book.id}
                        disabled={book.available <= 0}
                    >
                        {book.title}-Available: {book.available}

                    </option>

                ))}

            </select>



            <select
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="border border-black p-2 bg-white rounded w-72"
            >

                <option value="">
                    Select Member
                </option>
                {members.map(member => (

                    <option
                        key={member.id}
                        value={member.id}
                    >
                        {member.studentName}- {member.rollNo}

                    </option>

                ))}

            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-black p-2 rounded-lg bg-blue-500 hover:bg-blue-600"
            />

            <button
                onClick={handleBorrow}
                className="border border-black px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
            >
                Borrow Book
            </button>

        </div>

    )

}
export default BorrowForm