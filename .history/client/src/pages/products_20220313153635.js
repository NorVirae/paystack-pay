import robotImg from "../assets/images/robot.jpg";


const Product = () =>  {
    return <section className="product__container"> 
                <div className="product__card">
                    <img src={robotImg} />
                    <div className="product__description">
                        <div className="product__detail">
                            <div className="product__detail--title"></div>
                            
                        </div>
                    </div>
                </div>
    </section>
}

export default Product;