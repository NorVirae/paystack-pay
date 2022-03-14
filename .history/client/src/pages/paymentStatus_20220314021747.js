import { BsExclamationTriangleFill } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";




const PaymentStatus = () => {

    return <div className="payment-status">
                <div>
                
                    <BsExclamationTriangleFill style={{fontSize:"4rem"}} />
                    Payment of
                    <FcInfo style={{fontSize:"4rem"}} />


                </div>
        </div>
}

export default PaymentStatus;