import Card from "../component/Card";
import { getAllTransactions } from "../payment/api.service";



const Admin = () =>  {
    const handleFetch = async () => {
        await getAllTransactions()
    }

    
    return <div className="admin">
                <section className="admin__sidebar">
                    AdMiN dAsBoArD
                </section>
                <section className="admin__main">
                   <div className="admin__section-title"> Transactions </div>
                   <div className="admin__transactions">
                    {getTransactions}
                       <Card/>

                       <Card/>

                       <Card/>

                       <Card/>

                       <Card/>

                       

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