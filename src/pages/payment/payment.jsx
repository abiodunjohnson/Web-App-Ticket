import React,{ useState } from 'react'
import Button from "../../components/button/button";
import "../../pages/event/event.css";
import "./payment.css";
import vector from "../../assets/img/vector.png";
// import Loader from "../../components/loader/loader";

const Payment = () => {

    const [ count, setCount ] = useState(0);
    const [number, setNumber] = useState(0);
    const [total, setTotal] = useState(0);

    const [value, setValue] = useState(0)

//     const number = () => {
//         if(number > 0) {
//             setNumber(number+1)
//     }else {
//         setNumber(0)
//     }
// }




// const handleChange = (e) => {
//     console.log(e.target.value);
//     setValue(value *10)
// }

const handleChange = (e) => {
         console.log(e.target.value);
       setValue(value *10)
     }



const increCount = () => {
    setCount(count + 1) 
}

const decreCount = () => {
    setCount(count - 1)
    if(count < 1) {
        setCount(0)
        }
}


const increNumber = () => {
    setNumber(number + 1)
}

const decreNumber = () => {
    setNumber(number - 1)

    if(number < 1) {
        setNumber(0)
    }
}


const increTotal = () => {
    setTotal(total + 1)
}

const decreTotal = () => {
    setTotal(total - 1)

    if(total < 1) {
        setTotal(0)
    }
}


    return (
        <>
           
            <div className="payment_container">
                <div className="payment_left">
                <Button
                type="button"
                buttonSize="btn_smaller"
                buttonStyle="btn_secondary_solid"> X Close</Button>

                <h3 className="event__header">The Nathan Cole</h3>
                <h4 className="event__date">8th Feburary 2019</h4>

                <div className="status_left">
                    <div className="">Regular</div>
                    <div className="">&#8358;5,000</div>

                    <div className="payment_btn">
                        <Button onClick={decreCount}
                         type="button"
                         buttonSize="btn_smallest"
                         buttonStyle="btn_teritary_solid">-</Button>
                        <span className="number">{count}</span>
                        <Button onClick={increCount}
                         type="button"
                         buttonSize="btn_smallest"
                         buttonStyle="btn_teritary_solid">+</Button>
                    </div>
                </div>
                <hr></hr>
                <div className="status_left">
                    <div className="">VIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className="">&#8358;100,000</div>

                    <div className="payment_btn">
                        <Button onClick={decreNumber}
                        type="button"
                        buttonSize="btn_smallest"
                        buttonStyle="btn_teritary_solid"
                        >-</Button>
                        <span className="number">{number}</span>
                        <Button
                        onClick={increNumber}
                        type="button"
                        buttonSize="btn_smallest"
                        buttonStyle="btn_teritary_solid">+</Button>
                    </div>
                </div>
                <hr></hr>
                <div className="status_left">
                    <div className="">Table for 5&nbsp;&nbsp;</div>
                    <div className="">&#8358;1,000,000</div>

                    <div className="payment_btn">
                        <Button
                        onClick={decreTotal}
                         type="button"
                         buttonSize="btn_smallest"
                         buttonStyle="btn_teritary_solid">-</Button>
                        <span className="number">{total}</span>
                        <Button
                        onClick={increTotal}
                         type="button"
                         buttonSize="btn_smallest"
                         buttonStyle="btn_teritary_solid">+</Button>
                    </div>
                </div>
                <hr></hr>

                <div>Ticket sales on 22nd November 2019</div>
                </div>
                <div className="payment_right">
                    <h5 className="summary">ORDER SUMMARY</h5>

                    <hr className="summary_up_line"></hr>
                    <div className="summary_amount_wrapper">
                        <div className="summary_status"> <span>{count}</span> - Regular</div>
                        <div value={count} onChange={handleChange} className="summary_amount">&#8358;{5000 * count}</div>
                    </div>

                    <div className="status_amount_wrapper">
                        <div className="summary_status"> <span>{number}</span> - Vip</div>
                        <div className="summary_amount">&#8358;100,000</div>
                    </div>

                    <hr className="summary_up_line"></hr>

                    <div className="summary_status_amount_wrapper">
                        <div className="summary_subtotal"> Sub-total</div>
                        <div className="summary_subtotal_amount">&#8358; 110,000</div>
                    </div>

                    <div className="summary_status_amount_wrapper">
                        <div className="summary_vat"> Vat</div>
                        <div className="summary_vat_amount">&#8358; 10,000</div>
                    </div>
                    <div className="summary_status_amount_wrapper">
                        <div className="summary_vat"> Total Payment</div>
                        <div className="summary_vat_amount">&#8358; 10,000</div>
                    </div>
                    <Button 
                    type="button"
                    buttonSize="btn_large">
                      CONTINUE </Button>

                    <div className="customer">
                        <div className="vecto_cont">
                            <img src={vector} alt="" className="vector_img" />
                        </div>
                        <div className="sub_cust_text">
                            <div className="sub_cust_text_pro"> 100% customer protection</div>
                            <div className="sub_cust_text_guar">Money back guarantee</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <Loader /> */}
         
        </>
    )
}

export default Payment
