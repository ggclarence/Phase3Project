import React, { useState } from "react"
import Goals from "../../Components/Goals"

function AddGoal() {
    const [goal, setGoal] = useState("")
    const [refresh, setRefresh] = useState(true)

    function handleSubmit(value) {

        let newGoal = {
            user_id: 1,
            goal: value,
            img_url: null,
            status: false
        }


        fetch("http://localhost:9292/goals/1", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newGoal)            
        })
            .then(res => res.json())
            .then(res => console.log(res))
        setRefresh(refresh => !refresh)

    }





    return (
        <div>
            <h1>ADD DAILY GOAL</h1>
            <form className="addGoal" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(goal)
                setGoal("")
            }}>

                <input
                    type="text"
                    id="goal"
                    placeholder="Todays goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />

                <button type="submit" onClick={() => setRefresh(refresh => !refresh)}>Click me</button>
                <Goals refresh={refresh}/>

            </form>
        </div >
    )

}

export default AddGoal