import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Page1 = () => {

    const [userInput, setUserInput] = useState('')
    const navigate = useNavigate()

    const handleKeyUp = (e) => {
        setUserInput(e.target.value)
    }

    const handleClick = async () => {
        // e.preventDefault()
        const mobileRegex = /^[0-9]{10}$/
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{3,5}$/

        //validations
        if (mobileRegex.test(userInput) || emailRegex.test(userInput)) {
            const response = await fetch('/api/userinputs', {
                method: 'POST',
                body: JSON.stringify({ input: userInput }),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()

            if (response.ok) {
                console.log('data added')
                console.log(data)
                setUserInput('')
                navigate('/otp')
            }
            else {
                console.log('some error')
            }
        }
        else {
            setUserInput('')
            alert("Invalid input!")
        }
    }

    return (
        <div className="container p-5">
            <h3>Get started</h3>
            <br />
            <div className="container-fluid">
                <p>Enter a valid mobile number or email ID</p>
                {/* {userInput} */}
                <input
                    type="text"
                    className="form-control"
                    onChange={handleKeyUp}
                    value={userInput}
                />
                <br />
                <button className="btn btn-primary" onClick={handleClick}>Continue</button>
            </div>
        </div>
    );
}

export default Page1;