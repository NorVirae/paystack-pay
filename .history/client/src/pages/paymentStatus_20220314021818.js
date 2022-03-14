import { BsExclamationTriangleFill } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";




const PaymentStatus = () => {

    return <div className="payment-status">
                <div>
                
                    <BsExclamationTriangleFill style={{fontSize:"4rem"}} />
                    Payment of N500 Failed
                    <FcInfo style={{fontSize:"4rem"}} />
                    Payment of N500 waS


                </div>
        </div>
}

export default PaymentStatus;