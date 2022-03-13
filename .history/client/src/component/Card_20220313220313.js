import { useEffect, useState } from "react"



const Card = ({tr}) => {
    const [items, setItems] = useState([])
    
    
    return <div className="card">
                <div className="card-title">
                    transaction 1
                </div>
                <div className="card-body">
                    {tr?tr.map(its=>{
                        return <div> {JSON.stringify(its)}</div>
                    })}
                </div>
            </div>
}

export default Card;