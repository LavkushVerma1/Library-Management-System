function MemberList({
    
    members,
    openUpdateMemberForm,
    deleteMember

}){
    
    return(

        <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                All Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {members.map(member=>(
                    <div
                    key={member.id}
                    className="w-full rounded-lg border border-gray-900 p-4 bg-white hover:bg-gray-100"
                    >
                        <p>Member ID: {member.id}</p>
                        <p>Student Name: {member.studentName}</p>
                        <p>Roll No: {member.rollNo}</p>
                        <p>Branch: {member.branch}</p>
                        <p>Phone: {member.phone}</p>
                        <p>Email: {member.email}</p>


                        <div className="flex gap-3 mt-auto">

              <button
                onClick={() => openUpdateMemberForm(member)}
                className="border border-gray-800 px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-600 transition"
              >
                Update
              </button>

              <button
                onClick={() => deleteMember(member.id)}
                className="border border-gray-800 px-4 py-2 rounded-lg bg-red-400 hover:bg-red-500 transition"
              >
                Delete
              </button>
             

            </div>


                    </div>
                ))}
            </div>

            
        </div>

    )
}

export default MemberList