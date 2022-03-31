import React from "react";

function JournalEntriesCard({ entry }) {
    return (
        <div >
            <h1>{entry.title}</h1>
            <p>{entry.journal_entry}</p>
            <h3>{entry.user.name}</h3>
            <p>created on: {entry.created_at.slice(0, 10)}</p>
        </div>
    )

}

export default JournalEntriesCard