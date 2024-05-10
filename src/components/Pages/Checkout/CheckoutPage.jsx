
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [debitCard, setDebitCard] = useState('');
    const [ccName, setCcName] = useState('');
    const [ccExpiration, setCcExpiration] = useState('');
    const [ccCvv, setCcCvv] = useState('');
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        address: false,
        address2: false,
        country: false,
        state: false,
        zip: false,
        debitCard: false,
        ccName: false,
        ccExpiration: false,
        ccCvv: false,
    });

    const checkEmail = (value) => {
        const testEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return testEmail.test(value);
    };

    const checkZip = (value) => {
        const testZip = /^\d{5}(?:[-\s]\d{4})?$/;
        return testZip.test(value);
    };

    const checkAddress = (value) => {
        const testAddress = /^[a-zA-Z0-9\s,'-]*$/;
        return testAddress.test(value);
    };

    const checkDebitCard = (value) => {
        const testDebitCard = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
        return testDebitCard.test(value);
    };

    const checkCVV = (value) => {
        const testCVV = /^\d{3}$/;
        return testCVV.test(value);
    };

    const checkExpiration = (value) => {
        const testExpiration = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        return testExpiration.test(value);
    };

    const validateForm = () => {
        let hasErrors = false;
        const errors = {};

        if (!firstName.trim()) {
            errors.firstName = true;
            hasErrors = true;
        }

        if (!lastName.trim()) {
            errors.lastName = true;
            hasErrors = true;
        }

        if (email && !checkEmail(email)) {
            errors.email = true;
            hasErrors = true;
        }

        if (!address.trim() || !checkAddress(address)) {
            errors.address = true;
            hasErrors = true;
        }

        if (!country.trim()) {
            errors.country = true;
            hasErrors = true;
        }

        if (!state.trim()) {
            errors.state = true;
            hasErrors = true;
        }

        if (!zip.trim() || !checkZip(zip)) {
            errors.zip = true;
            hasErrors = true;
        }

        if (!debitCard.trim() || !checkDebitCard(debitCard)) {
            errors.debitCard = true;
            hasErrors = true;
        }

        if (!ccName.trim()) {
            errors.ccName = true;
            hasErrors = true;
        }

        if (!ccExpiration.trim() || !checkExpiration(ccExpiration)) {
            errors.ccExpiration = true;
            hasErrors = true;
        }

        if (!ccCvv.trim() || !checkCVV(ccCvv)) {
            errors.ccCvv = true;
            hasErrors = true;
        }

        setFormErrors(errors);
        return hasErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {

            setTimeout(() => {
                alert("Payment successful!");
                localStorage.removeItem('cartItems');
                navigate('/cart');
            }, 3000);
        }
    };


    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
        <div className="container mb-4 mt-4">
            <main>
                <div className="row g-3">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span>Your cart</span>
                            <span className="badge bg-primary rounded-pill"></span>
                        </h4>
                        <ul className="list-group mb-3">

                            {cartItems.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                                    {item.name}
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>{`$${totalPrice.toFixed(2)}`}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`} id="firstName" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    {formErrors.firstName && <div className="invalid-feedback">Valid first name is required.</div>}
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`} id="lastName" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    {formErrors.lastName && <div className="invalid-feedback">Valid last name is required.</div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                                    <input type="email" className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {formErrors.email && <div className="invalid-feedback">Please enter a valid email address.</div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className={`form-control ${formErrors.address ? 'is-invalid' : ''}`} id="address" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    {formErrors.address && <div className="invalid-feedback">Please enter a valid address.</div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                                    <input type="text" className={`form-control`} id="address2" placeholder="Apartment or suite" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className={`form-select ${formErrors.country ? 'is-invalid' : ''}`} id="country" value={country} onChange={(e) => setCountry(e.target.value)} >
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    {formErrors.country && <div className="invalid-feedback">Please select a valid country.</div>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className={`form-select ${formErrors.state ? 'is-invalid' : ''}`} id="state" value={state} onChange={(e) => setState(e.target.value)} >
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    {formErrors.state && <div className="invalid-feedback">Please provide a valid state.</div>}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className={`form-control ${formErrors.zip ? 'is-invalid' : ''}`} id="zip" placeholder="" value={zip} onChange={(e) => setZip(e.target.value)} />
                                    {formErrors.zip && <div className="invalid-feedback">Zip code required.</div>}
                                </div>
                            </div>
                            <hr className="my-4" />
                            <h4 className="mb-3">Payment</h4>
                            <div className="my-3">
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                            </div>
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className={`form-control ${formErrors.ccName ? 'is-invalid' : ''}`} id="cc-name" placeholder="" value={ccName} onChange={(e) => setCcName(e.target.value)} />
                                    {formErrors.ccName && <div className="invalid-feedback">Name on card is required</div>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="debitCard" className="form-label">Debit card number</label>
                                    <input type="text" className={`form-control ${formErrors.debitCard ? 'is-invalid' : ''}`} id="debitCard" placeholder="xxxx xxxx xxxx xxxx" value={debitCard} onChange={(e) => setDebitCard(e.target.value)} />
                                    {formErrors.debitCard && <div className="invalid-feedback">Debit card number is required</div>}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className={`form-control ${formErrors.ccExpiration ? 'is-invalid' : ''}`} id="cc-expiration" placeholder="MM/YY" value={ccExpiration} onChange={(e) => setCcExpiration(e.target.value)} />
                                    {formErrors.ccExpiration && <div className="invalid-feedback">Expiration date required</div>}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className={`form-control ${formErrors.ccCvv ? 'is-invalid' : ''}`} id="cc-cvv" placeholder="XXX" value={ccCvv} onChange={(e) => setCcCvv(e.target.value)} />
                                    {formErrors.ccCvv && <div className="invalid-feedback">Security code required</div>}
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button className="w-100 btn btn-warning btn-lg" type="button" onClick={handleSubmit}>Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CheckoutPage;



