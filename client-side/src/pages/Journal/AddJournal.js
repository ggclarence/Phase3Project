import React, { useState } from "react";

function AddJournal() {
    const [journalTitle, setJournalTitle] = useState("")
    const [journalBody, setJournalBody] = useState("")

    function handleSubmit(title, body) {

        let newJournal = {
            title: title,
            body: body,
            user_id: 1
        }

        fetch("http://localhost:9292/journals", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJournal)
        })

    }




    return (
        <div>
            <h1>ADD JOURNAL</h1>
            <form className="addJournal" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(journalTitle, journalBody)
            }}>

                <input type="text" id="journal-title" placeholder="Title" value={journalTitle} onChange={(e) => setJournalTitle(e.target.value)} />
                <input type="text" id="journal-body" placeholder="Body" value={journalBody} onChange={(e) => setJournalBody(e.target.value)} />
                <button type="submit">Click Me!</button>

            </form>
        </div>
    )
}

export default AddJournal
