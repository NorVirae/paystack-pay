import { useState } from "react";
import { Link } from "react-router-dom";
import robotImg from "../assets/images/robot.jpg";
import Modal from "../component/modal";
import { innitiateTransaction } from "../payment/api.service";


const Product = () =>  {
    const [showModal, setShowModal] = useState(false)
    const [siteUrl, setSiteUrl] = useState("")
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:""

    })
    const handleBuy = async () => {
        const data = await innitiateTransaction()
        let payLink = data.data.data
        console.log(data.data.data, "LOOK HERE SIR")
        setSiteUrl(payLink.authorization_url)
        setShowModal(true)
        // window.location.href = payLink.authorization_url
    }

    
    return <section className="product__container">
                <section className="product__login">
                    <p className="product__login--description">Login as Admin to view Transactions</p>
                    <Link className={"product__login--link"} to={'/login'}>Login</Link>
                </section> 
                <div className="product__card">
                    <img className="product__image" src={robotImg} />
                    <div className="product__description">
                        <p className="product__main-title"> RObO DOG</p>
                        <div className="product__detail">
                            <div className="product__detail--title">Price</div>
                            <div className="product__detail--data">N500</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Name</div>
                            <div className="product__detail--data">Robo Guy</div>

                        </div>

                       

                        <div className="product__detail">
                            <div className="product__detail--title">Type</div>
                            <div className="product__detail--data">3D Asset</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Quantity</div>
                            <div className="product__detail--data">Unlimited</div>

                        </div>

                        

                        <div className="product__detail">
                            <div className="product__detail--title">File Type</div>
                            <div className="product__detail--data">.blend, .obj</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Rigged</div>
                            <div className="product__detail--data">Yes</div>

                        </div>
                        {/* form starts here */}
                        <form>

                            <div className="product__detail">
                                <div className="product__detail--title">email</div>
                                <input className="form-control-product"/>

                            </div>


                            <div className="product__detail">
                                <div className="product__detail--title">name</div>
                                <input className="form-control-product"/>

                            </div>


                            <div className="product__detail">
                                <div className="product__detail--title">phone</div>
                                <input className="form-control-product"/>

                            </div>

                            <div className="product__detail">
                            <button onClick={e=>handleBuy(e)} className="product__detail--button">Buy</button>

                            </div>
                        </form>

                        
                    </div>
                </div>

            {showModal?<Modal setShowModal={setShowModal} src={siteUrl}/>:null}
    </section>
}

export default Product;