import React from "react";

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phones',
            qty:1,
            img:''
        

        }
    }
    increaseQuantity=()=>{
        console.log('test',this.state);
    }

    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>{price}</div>
                    <div style={ {color:'#777'} }>{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity.bind(this)} />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'yellow'
    }
}

export default CartItem;