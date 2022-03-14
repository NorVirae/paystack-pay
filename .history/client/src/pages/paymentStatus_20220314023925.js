import { useEffect, useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";




const PaymentStatus = () => {
    const [status, setStatus] = useState(false)
    useEffect(()=>{
        try{

        }catch(err){

        }
    },[])

    return <div className="payment-status">
                <div className="payment-status__body">
                   {status? <>
                        <FcInfo style={{fontSize:"4rem"}} />
                        <div className="">Payment of N500 was successful! </div>
                    </>:

                    <>
                        <BsExclamationTriangleFill style={{fontSize:"4rem"}} />
                        <div className="">Payment of N500 Failed</div>
                    </>}
                </div>
        </div>
}

export default PaymentStatus;