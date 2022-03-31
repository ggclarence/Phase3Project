import React, { useState, useEffect } from "react";
import JournalEntriesCard from "./JournalEntriesCard";

function JournalEntries() {
    const [journalEntries, setJournalEntries] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/journals")
        .then(res => res.json())
        .then(res => setJournalEntries(res))
    }, [])

    const entriesMap = journalEntries.map((entry) => {
        return <JournalEntriesCard key={entry.id} entry={entry} />
    })



    return (
        <div>
            {entriesMap}
        </div>
    )

}

export default JournalEntries