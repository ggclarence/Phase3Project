import React from "react"
import AddGoal from "./AddGoal"
import AddJournal from "./AddJournal"
import './styles.css'

function Journal({ user }) {
    return (
        <div className="journal">
            <AddGoal user={user}/>
            <AddJournal user={user}/>
        </div>
    )
}

export default Journal