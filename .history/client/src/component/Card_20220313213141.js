


const Card = ({tr}) => {
    const [items, ]
    const listify = (tr) => {
        let theList = []
        for(keys in tr){
            theList.push({[keys] : tr[keys]})
            return <div> <span></span></div>
            }
        
    }
    return <div className="card">
                <div className="card-title">
                    transaction 1
                </div>
                <div className="card-body">
                    {}
                </div>
            </div>
}

export default Card;