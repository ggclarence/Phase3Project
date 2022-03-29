import React, { useState, useEffect } from "react";

function Goals({ refresh }) {
    const [goals, setGoals] = useState([])

    useEffect (() => {
        fetch("http://localhost:9292/goals")
            .then(res => res.json())
            .then(res => setGoals(res))
    }, [refresh])


    const goalsMap = goals.map((goal) => {
        return (
            <li>{goal.goal}</li>
        )
    })


    return(
        <ul>
            {goalsMap}
        </ul>
    )
}

export default Goals