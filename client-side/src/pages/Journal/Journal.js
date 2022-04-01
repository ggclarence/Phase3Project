import React from "react"
import AddGoal from "./AddGoal"
import AddJournal from "./AddJournal"

function Journal() {
    return (
        <div className="journal">
            <AddGoal />
            <AddJournal />
        </div>
    )
}

export default Journal