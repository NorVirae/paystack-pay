




const Modal = ({src}) => {
    return <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", top:0, left:0, height:"100vh", width:"100vw", backgroundColor:"rgba(0,0,0,0.4)"}}>
                <iframe name="I1" id="if1"  
                         style={{width:"30rem"}}
                        src={src}></iframe>    
                <span onClick={e=setShowModal(false)}>X Close</span>
            </div>    
}

export default Modal;