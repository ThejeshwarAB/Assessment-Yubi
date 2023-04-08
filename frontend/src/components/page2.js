import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
    const [count, setCount] = useState(10)
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(
            () => { setCount(count - 1) },
            1000)
        if (count <= 0) {
            // history.back();
            navigate('/')
        }
    }, [count])

    useEffect(()=>{
        if(otp==='9999')
        {
            navigate('/details')
        }
    },[otp])
    
    const handleOnKeyUp = (e) => {
        setOtp(e.target.value)
    }

    return (
        <div className="container p-5">
            <h3>Enter OTP</h3>
            <br />
            <div className="container-fluid">
                <p>We have sent an OTP to +91-98416-XXXXX</p>
                {/* {otp} */}
                <input
                    type="password"
                    className="form-control"
                    autoComplete="off"
                    // value={otp} 
                    onKeyUp={(e) => handleOnKeyUp(e)}
                />
                <br />
                <p>Resend OTP in {count} seconds</p>
            </div>
        </div>
    );
}

export default Page2;