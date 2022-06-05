import { useState } from 'react';
import './paymentPlan.css';

const initialFormValues = {
    mortgageAmount: 100000.00,
    interestRate: 5.00,
    amortizationPeriod: 25,
    paymentFrequency: 'M',
    term: 5,
}

export default function PaymentPlan(){

    const [formState, setFormState] = useState(initialFormValues);

    const calculatePayment = (event) => {
        event.preventDefault();
        console.log('xx', formState);
        // setFormState(initialFormValues);
    }

    const handleFieldChange = (event) => {
        setFormState({...formState, [event.target.name]: [event.target.value]})
    }

    console.log(formState)

    return (<div id="mainContainer">
        <div>
            <form id="formContainer" onSubmit={calculatePayment}>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label for="mortgageAmount">Mortgage Amount:</label>
                        </div>
                        <div className="fieldEntry">
                            <span className="specialEntry">$</span>
                            <input id="mortgageAmount" type="text" name="mortgageAmount" value={formState.mortgageAmount} onChange={handleFieldChange} maxLength="20" allowZero="false" />
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label for="interestRate">Interest Rate:</label>
                        </div>
                        <div className="fieldEntry">
                            <input id="interestRate" type="text" name="interestRate"  value="5.00" maxLength="8" allowZero="false" validationType="Percent" />
                            <span className="specialEntry">%</span>
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label for="amortizationPeriod">Amortization Period:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="amortizationPeriod" id="amortizationPeriod">
                                <option value="0"> </option>
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                                <option value="6">6 Years</option>
                                <option value="7">7 Years</option>
                                <option value="8">8 Years</option>
                                <option value="9">9 Years</option>
                                <option value="10">10 Years</option>
                                <option value="11">11 Years</option>
                                <option value="12">12 Years</option>
                                <option value="13">13 Years</option>
                                <option value="14">14 Years</option>
                                <option value="15">15 Years</option>
                                <option value="16">16 Years</option>
                                <option value="17">17 Years</option>
                                <option value="18">18 Years</option>
                                <option value="19">19 Years</option>
                                <option value="20">20 Years</option>
                                <option value="21">21 Years</option>
                                <option value="22">22 Years</option>
                                <option value="23">23 Years</option>
                                <option value="24">24 Years</option>
                                <option selected="selected" value="25">25 Years</option>
                                <option value="26">26 Years</option>
                                <option value="27">27 Years</option>
                                <option value="28">28 Years</option>
                                <option value="29">29 Years</option>
                                <option value="30">30 Years</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label for="paymentFrequency">Payment Frequency:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="paymentFrequency" id="paymentFrequency">
                                <option selected="selected" value="M">Monthly (12x per year)</option>
                                <option value="SemiM">Semi-monthly (24x per year)</option>
                                <option value="BiW">Bi-Weekly (every 2 weeks)</option>
                                <option value="AccBiW">Accelerated Bi-weekly</option>
                                <option value="W">Weekly</option>
                                <option value="AccW">Accelerated Weekly</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label for="term">Term:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="term" id="term">
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option selected="selected" value="5">5 Years</option>
                                <option value="6">6 Years</option>
                                <option value="7">7 Years</option>
                                <option value="8">8 Years</option>
                                <option value="9">9 Years</option>
                                <option value="10">10 Years</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <input id="submitButton" type="submit" value="Calculate" />
            </form>
        </div>
    </div>)
}