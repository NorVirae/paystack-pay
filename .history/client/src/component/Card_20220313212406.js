


const Card = ({tr}) => {
    return <div className="card">
                <div className="card-title">
                    transaction 1
                </div>
                <div className="card-body">
                    {for (keys in tr)}
                    <div> <span></span></div>
                </div>
            </div>
}

export default Card;