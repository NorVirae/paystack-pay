import Card from "../component/Card";
import { getAllTransactions } from "../payment/api.service";
import {useState, useEffect} from 'react';


const Admin = () =>  {
    const handleFetch = async () => {
       const result = await getAllTransactions();
       console.log(result, "HAU")
       setTransactions(result.data.data);
    }

    const [transactions, setTransactions] = useState([])

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
                    {transactions?transactions.map((tr)=>{
                       return <Card tr={tr}/>
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