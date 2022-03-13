import Card from "../component/Card";



const Admin = () =>  {
    return <div className="admin">
                <section className="admin__sidebar">
                    RObo Dasboard
                </section>
                <section className="admin__main">
                   <div className="admin__section-title"> Transactions </div>
                   <div className="admin__transactions">
                       {/* ----------- */}
                       <Card/>
                       {/* ---------------- */}

                       {/* ----------- */}
                       <Card/>
                       {/* ---------------- */}

                       {/* ----------- */}
                       <Card/>
                       {/* ---------------- */}

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