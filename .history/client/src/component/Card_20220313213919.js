import { useEffect, useState } from "react"



const Card = ({tr}) => {
    const [items, setItems] = useState([])
    const listify = (tr) => {
        let theList = []
        for(let keys in tr){
            theList.push({[keys] : tr[keys]})
            }

        cons
        return theList
    }
    
    return <div className="card">
                <div className="card-title">
                    transaction 1
                </div>
                <div className="card-body">
                    {listify().map(its=>{
                        return <div> {JSON.stringify(its)}</div>
                    })}
                </div>
            </div>
}

export default Card;