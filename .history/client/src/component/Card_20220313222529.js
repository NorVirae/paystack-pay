import { useEffect, useState } from "react"



const Card = ({tr}) => {
    const [items, setItems] = useState([])
    
    
    return <div className="card">
                <div className="card-title">
                    {tr.?tr.customer.email:null}
                </div>
                <div className="card-body">
                    {tr?tr.map(its=>{
                        return <div> {JSON.stringify(Object.keys(its)[0])} {JSON.stringify(its[Object.keys(its)[0]])}</div>
                    }):null}
                </div>
            </div>
}

export default Card;