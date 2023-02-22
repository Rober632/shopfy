import { useNavigate } from 'react-router';
import './checkout.css'
const Checkout = () => {
    const navigate = useNavigate()
    return(
           <div className="checkout-page">
               <button className='bk-btn' onClick={()=> navigate(-1)}> {`<`} </button>
               <div className="shipping">
                <h3 className="heading-3">Ship To</h3>
                <div className="shipping-info">
                <p>First Name</p>
                <input type='text'/>
                </div>
                <div className="shipping-info">
                <p>Last Name</p>
                <input type='text'></input>
                </div>
                <div>
                <p>Street Address</p>
                <input className='addressInput' type='text'/>
                </div>
                <div className="shipping-info">
                <p>Postal Code</p>
                <input type='text'/>
                </div>
                <div className="shipping-info">
                <p>Town / City</p>
                <input type='text'></input>
                </div>
                <div>
                <p>Phone Number</p>
                <input className='addressInput' type='text'/>
                </div>
                </div>
              <div className="checkout-container-page">
               <h3 className="heading-3">Credit card checkout</h3>
               <p for="Cardholder's Name">Cardholder's Name </p>
               <input label="Cardholder's Name" type="text" name="name" className='input-checkout'/>
               {/* <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" alt="a" /> */}
               <p for="Card Number">Card Number </p>
               <input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" className='input-checkout'/>
                  <div className="shipping-info">
                      <p for="Expiration Date" > Expiration Date</p>
                    <input label="Expiration Date" type="month" name="exp_date" maxLength={2} className="shortLabel" />
                  </div>
                  <div className="shipping-info">
                    <p for="CVV">CVV</p>
                    <input label="CVV" type="text" maxLength={3} name="cvv" className="shortLabel"/>
                  </div>
                <button className="checkout-btn" type="button">Place Order</button>
              </div>
            </div>
          )
}
export default Checkout;
