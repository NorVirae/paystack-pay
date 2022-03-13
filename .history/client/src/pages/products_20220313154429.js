import robotImg from "../assets/images/robot.jpg";


const Product = () =>  {
    return <section className="product__container"> 
                <div className="product__card">
                    <img className="product__image" src={robotImg} />
                    <div className="product__description">
                        <div className="product__detail">
                            <div className="product__detail--title">name</div>
                            <div className="product__detail--data">Robo Guy</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">type</div>
                            <div className="product__detail--data">3D Asset</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Price</div>
                            <div className="product__detail--data">N500</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Price</div>
                            <div className="product__detail--data">N500</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Price</div>
                            <div className="product__detail--data">N500</div>

                        </div>

                        <div className="product__detail">
                            <div className="product__detail--title">Price</div>
                            <div className="product__detail--data">N500</div>

                        </div>
                    </div>
                </div>
    </section>
}

export default Product;