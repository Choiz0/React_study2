const MenuItem =({title,img,price,desc})=>{
    return(
        <div className="menu-item ">   
       
            <img className="img " src={img}/>
        
            <div className="item-info">
                <header>
                    <h5>{title}</h5>
                    <div className="item-price">
                        {price}
                    </div>
                    <div className="item-text">
                        {desc}
                    </div>
                </header>
            </div>
        </div>
    )
}
export default MenuItem;