import React, { useState } from "react"

function AddGoal() {
    const [goal, setGoal] = useState("")

    function handleSubmit(value) {

        let newGoal = {
            user_id: 1,
            goal: value
        }


        fetch("http://localhost:9292/goals", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newGoal)            
        })
            .then(res => res.json())
            .then(res => console.log(res))

    }





    return (
        <div>
            <h1>ADD DAILY GOAL</h1>
            <form className="addGoal" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(goal)
            }}>

                <input
                    type="text"
                    id="goal"
                    placeholder="Todays goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />

                <button type="submit">Click me</button>

            </form>
        </div >
    )

}

export default AddGoal