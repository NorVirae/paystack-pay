import { useState } from "react"



const Card = ({tr}) => {
    const [items, setItems] = useState([])
    const listify = (tr) => {
        let theList = []
        for(keys in tr){
            theList.push({[keys] : tr[keys]})
            }
        setItems()
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