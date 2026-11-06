function BorrowList({ borrowRecords, returnBook }) {


    return (

        <div className="max-w-7xl mx-auto px-6 py-8">

            <h2 className="text-3xl font-bold text-gray-950 mb-8">
                Borrow Records
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {borrowRecords.map(record => (

                    <div
                        key={record.id}
                        className="bg-gray-100 border border-gray-800 rounded-lg p-5 shadow-sm">

                        <p>
                            <b>Record Id:</b> {record.id}
                        </p>
                        <p>
                            <b>Book:</b> {record.book?.title}
                        </p>
                        <p>
                            <b>Member:</b> {record.member?.studentName}
                        </p>
                        <p>
                            <b>Borrow Date:</b> {record.borrowDate}
                        </p>
                        <p>
                            <b>Due Date:</b> {record.dueDate}
                        </p>
                        <p>
                            <b>Return date:</b> {" "}
                            {record.returnDate || "Not Returned"}
                        </p>

                        <p className="font-bold mt-2">
                            Status: {record.status}
                        </p>

                        {record.status === "Borrowed" && (

                            <button
                                onClick={() => returnBook(record.id)}
                                className="mt-4 border border-black px-4 py-2 rounded-lg bg-green-400 hover:bg-green-500"
                            >
                                Return Book
                            </button>

                        )}

                    </div>

                ))}

            </div>


        </div>

    );

}
export default BorrowList;