import React, { useState, useEffect } from "react";
import './styles.css'

function Goals({ refresh, user }) {
    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/goals/${user.id}`)
            .then(res => res.json())
            .then(res => setGoals(res))
    }, [refresh, user.id])

    function handleChange(id) {
        let goalUpdate = {
            status: true
        }

        fetch(`http://localhost:9292/goals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goalUpdate)
        })
            .then(res => res.json())
            .then(res => console.log(res))

    }

    const goalsMap = goals.map((goal) => {
        return (
            <li key={goal.id} className="checkbox">
                <input type="checkbox"                    
                    onChange={() => handleChange(goal.id)}
                    checked={(goal.status) ? "checked" : null} />
                <label htmlFor={goal.id}> {goal.goal} </label>
            </li>
        )
    })

    return (
        <div className="goals">
            <h1>Daily Goals:</h1>
            {goalsMap}
        </div>
    )
}

export default Goals;