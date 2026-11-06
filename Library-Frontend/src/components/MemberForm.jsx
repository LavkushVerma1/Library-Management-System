import { useState } from "react";

function MemberForm({

    addMember,
    updateMember,

    isUpdate,

    updateStudentName,
    setUpdateStudentName,

    updateRollNo,
    setUpdateRollNo,

    updateBranch,
    setUpdateBranch,

    updatePhone,
    setUpdatePhone,

    updateEmail,
    setUpdateEmail

}) {
    const handleUpdate = () => {
        updateMember();
    };

    return (

        <div className="flex flex-col items-center gap-3 mt-8">

            <h2>
                {isUpdate ? "update Member" : "Add Member"}
            </h2>

            {isUpdate ? (
                <>

                    <input 
                        type="text"
                        placeholder="Enter student name"
                        value={updateStudentName}
                        onChange={(e)=>
                            setUpdateStudentName(e.target.value)
                        }
                        className="border border-black p-2 bg-white rounded"
                    />
                    <input 
                        type="text"
                        placeholder="Enter student roll no"
                        value={updateRollNo}
                        onChange={(e)=>
                            setUpdateRollNo(e.target.value)
                        }
                        className="border border-black p-2 bg-white rounded"
                    />
                    <input 
                        type="text"
                        placeholder="Enter student branch"
                        value={updateBranch}
                        onChange={(e)=>
                            setUpdateBranch(e.target.value)
                        }
                        className="border border-black p-2 bg-white rounded"
                    />
                    <input 
                        type="text"
                        placeholder="Enter student phone"
                        value={updatePhone}
                        onChange={(e)=>
                            setUpdatePhone(e.target.value)
                        }
                        className="border border-black p-2 bg-white rounded"
                    />
                    <input 
                        type="text"
                        placeholder="Enter student email"
                        value={updateEmail}
                        onChange={(e)=>
                            setUpdateEmail(e.target.value)
                        }
                        className="border border-black p-2 bg-white rounded"
                    />
                    <button
                    onClick={handleUpdate}
                    className="border border-black px-4 py-2 rounded bg-blue-400"
                    >
                        Update Member
                    </button>

                </>

                    ):(
                        <AddMemberForm addMember={addMember}/>

            )}

        </div>

    )
}

    function AddMemberForm({addMember}){
    
    const [studentName, setStudentName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [branch, setBranch] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleMember = () => {

        if(
            studentName.trim()==="" ||
            rollNo.trim()==="" ||
            branch.trim()==="" ||
            phone.trim()===""
        ){
            alert("Please fill all fields");
            return;
        }

        if(!/^\d{10}$/.test(phone)){
            alert("Phone number must contain exactly 10 digits")
            return;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            alert("Please enter a valid email");
        }

        const member = {
            studentName,
            rollNo,
            branch,
            phone,
            email
        };
        addMember(member)
    };
    return (
        <>

            <input
                type="text"
                placeholder="Enter Student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="border border-black p-2 bg-white rounded"
            />

            <input
                type="text"
                placeholder="Enter student rollNo"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="border border-black p-2 bg-white rounded"
            />

            <input
                type="text"
                placeholder="Enter student branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="border border-black p-2 bg-white rounded"
            />

            <input
                type="text"
                placeholder="Enter student phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-black p-2 bg-white rounded"
            />
            <input
                type="text"
                placeholder="Enter student email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black p-2 bg-white rounded"
            />

            <button
                onClick={handleMember}
                className="border border-black px-4 py-2 rounded-lg bg-blue-500"
            >
                Submit
            </button>


        </>
    )
}
export default MemberForm