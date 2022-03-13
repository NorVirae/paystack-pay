import Card from "../component/Card";
import { getAllTransactions } from "../payment/api.service";
import {useState, useEffect} from 'react';


const Admin = () =>  {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState()
    const handleFetch = async () => {
       const result = await getAllTransactions();
       console.log(result, "HAU")
       setTransactions(result.data.data);
    }


    useEffect(()=>{
        handleFetch()
    }, [])

    return <div className="admin">
                <section className="admin__sidebar">
                    AdMiN dAsBoArD
                </section>
                <section className="admin__main">
                   <div className="admin__section-title"> Transactions </div>
                   <div className="admin__transactions">
                    {transactions?transactions.map((tr, index)=>{
                       return <Card key={index} tr={tr}/>
                    }):null}

                   </div>

                   <div className="admin__section-title"> Customers </div>
                   <div className="admin__customers">

                        
                       <Card/>
                       
                       <Card/>

                       <Card/>
                       
                       <Card/>
                       
                       <Card/>
                       
                   </div>
                </section>
    </div>
}

export default Admin;