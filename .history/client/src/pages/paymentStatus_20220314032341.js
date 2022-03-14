import { useEffect, useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { verifyTransaction } from "../payment/api.service";




const PaymentStatus = () => {
    const [status, setStatus] = useState(false)
    const params = useParams()
    
    useEffect(()=>{
        try{
            verifyTransaction()
        }catch(err){

        }
    },[])

    return <div className="payment-status">
                <div className="payment-status__body">
                   {status? <>
                        <FcInfo style={{fontSize:"7rem", marginBottom:"2rem", backgroundColor:"rgb(246, 107, 26);"}} />
                        <div className="payment-success">Payment of N500 was successful! </div>
                    </>:
                    <>
                        <BsExclamationTriangleFill style={{fontSize:"7rem", marginBottom:"2rem", color:"rgb(246, 107, 26);"}} />
                        <div className="payment-failed">Payment of N500 Failed</div>
                    </>}
                </div>
        </div>
}

export default PaymentStatus;