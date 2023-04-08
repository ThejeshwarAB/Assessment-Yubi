import { useEffect, useState } from "react";

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from "react-router-dom";

const Page3 = () => {
    const [listItems, setListItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getListItems = async () => {
            const response = await fetch('/api/userinputs')
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                setListItems(data)
                console.log("called here")
            }
        }
        getListItems()
    }, [setListItems])

    const handleDelete = async (id) => {
        const response = await fetch('/api/userinputs/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = response.json()
        if (response.ok) {
            console.log('data deleted')
            console.log(data)
            navigate('/otp')
        }
    }

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="container p-5">
            <h3>Mobile number/Email ID list</h3>
            <br />
            <div className="container-fluid">
                {listItems && listItems.map((listItem) => {
                    return (
                        <div key={listItem._id}>
                            <p className="list-item">
                                {listItem.input}
                                <span className="delete-btn">
                                    <i className="fa-regular fa-trash-can" onClick={() => handleDelete(listItem._id)}></i>
                                </span></p>
                            <p className="list-item-time">
                                {formatDistanceToNow(new Date(listItem.createdAt), { addSuffix: true })}
                            </p>
                        </div>
                    )
                })}
                {listItems.length == 0 &&
                    (
                        <div className="container">
                            <p>Nothing here!</p>
                        </div>

                    )
                }
                <button className="btn btn-primary" onClick={handleClick}>Goto home</button>
            </div>
        </div>
    );
}

export default Page3;