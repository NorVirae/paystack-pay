import { useEffect, useState } from "react"



const Card = ({tr}) => {
    const [items, setItems] = useState([])
    const listify = (tr) => {
        let theList = []
        for(let keys in tr){
            theList.push({[keys] : tr[keys]})
            }
        theList
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