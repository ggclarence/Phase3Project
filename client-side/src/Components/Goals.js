import React, { useState, useEffect } from "react";

function Goals({ refresh }) {
    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/goals/1")
            .then(res => res.json())
            .then(res => setGoals(res))
    }, [refresh])

    function handleChange(id) {

        let goalUpdate = {
            status: true
        }

        fetch(`http://localhost:9292/goals/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(goalUpdate)
        })
            .then(res => res.json())
            .then(res => console.log(res))

    }


    const goalsMap = goals.map((goal) => {
        return (
            <li>
                <input type="checkbox" id={goal.id} onChange={()=> handleChange(goal.id)} checked={(goal.status) ? "checked" : null}/>
                <label for={goal.id}>{goal.goal}</label>
            </li>
        )
    })


    return (
        <ul>
            {goalsMap}
        </ul>
    )
}

export default Goals