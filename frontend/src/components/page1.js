import { useState } from "react"

const Page1 = () => {

    const [userInput, setUserInput] = useState('')

    const handleKeyUp = (e) => {
        setUserInput(e.target.value)
    }

    const handleClick = async () => {
        // e.preventDefault()
        const response = await fetch('/api/userinputs')
        const data = await response.json()

        if (response.ok) {
            console.log('data added')
            console.log(response)
        }
        else {
            console.log('some error')
        }
    }

    return (
        <div className="container p-5">
            <h3>Get started</h3>
            <br />
            <div className="container-fluid">
                {userInput}
                <input
                    type="text"
                    className="form-control"
                    onKeyUp={handleKeyUp}
                />
                <br />
                <button className="btn btn-primary" onClick={handleClick}>Continue</button>
            </div>
        </div>
    );
}

export default Page1;