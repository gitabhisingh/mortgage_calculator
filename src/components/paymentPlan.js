import { useState } from 'react';
import './paymentPlan.css';

const initialValues = {
    principalAmount: 200000.00,
    interestRate: 6.50,
    amortizationPeriod: 25,
    paymentFrequency: 12,
    term: 5,
}

const paymentValues = {
    principalAmount: 200000.00,
    interestRate: 6.50,
    amortizationPeriod: 25,
    paymentFrequency: 12,
    term: 5,
    mortgagePayment: '',
    totalAmount: '',
    totalInterest: '',
    interestAtTerm: '',
}

const addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const roundToFixed = (num, places) => {
    return num.toFixed(places)
}

export default function PaymentPlan(){

    const [initialState, setInitialState] = useState(initialValues);

    const [paymentState, setPaymentState] = useState(paymentValues);

    const calculatePayment = (event) => {
        event.preventDefault();

        const interestValue = initialState.interestRate / 100 / initialState.paymentFrequency;

        const paymentValue = roundToFixed((interestValue * initialState.principalAmount) / (1 - Math.pow(1 + (interestValue), (-initialState.amortizationPeriod * initialState.paymentFrequency))), 2);

        const totalAmount = roundToFixed(paymentValue * initialState.paymentFrequency * initialState.amortizationPeriod, 2);

        const totalInterest = roundToFixed((totalAmount - initialState.principalAmount), 2)

        const interestAtTerm = roundToFixed((initialState.principalAmount*interestValue - paymentValue) * ((Math.pow(1 + interestValue, (initialState.term * initialState.paymentFrequency)) - 1) / interestValue) + (paymentValue * paymentState.paymentFrequency * paymentState.term), 2);

        setPaymentState({...paymentState, mortgagePayment: paymentValue, totalAmount: totalAmount, totalInterest: totalInterest, interestAtTerm: interestAtTerm})
    }

    const handleFieldChange = (event) => {
        setInitialState({...initialState, [event.target.name]: event.target.value})
    }

    return (<div id="mainContainer">
        <div id="mortgageCalculator">
            <form id="formContainer" onSubmit={calculatePayment}>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label htmlFor="principalAmount">Mortgage Amount:</label>
                        </div>
                        <div className="fieldEntry">
                            <span className="specialEntry">$</span>
                            <input id="principalAmount" type="number" name="principalAmount" value={initialState.principalAmount} onChange={handleFieldChange} maxLength="20" />
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label htmlFor="interestRate">Interest Rate:</label>
                        </div>
                        <div className="fieldEntry">
                            <input id="interestRate" type="number" name="interestRate"  value={initialState.interestRate} maxLength="8" onChange={handleFieldChange}/>
                            <span className="specialEntry">%</span>
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label htmlFor="amortizationPeriod">Amortization Period:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="amortizationPeriod" id="amortizationPeriod" value={initialState.amortizationPeriod} onChange={handleFieldChange}>
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
                                <option value="25">25 Years</option>
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
                            <label htmlFor="paymentFrequency">Payment Frequency:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="paymentFrequency" id="paymentFrequency" value={initialState.paymentFrequency} onChange={handleFieldChange}>
                                <option value="12">Monthly (12x per year)</option>
                                <option value="24">Semi-monthly (24x per year)</option>
                                <option value="26">Bi-Weekly (every 2 weeks)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="formFields">
                    <div className="formFieldContainer">
                        <div className="fieldLabel">
                            <label htmlFor="term">Term:</label>
                        </div>
                        <div className="fieldEntry">
                            <select name="term" id="term" value={initialState.term} onChange={handleFieldChange}>
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
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <input id="submitButton" type="submit" value="Calculate" />
            </form>
        </div>
        <div id="calculationSummary">
            <h2>Calculation Summary</h2>
            <table id="summaryTable">
                <thead>
                    <tr className='tableRow'>
                        <th>Category</th>
                        <th>Term | {paymentState.term} year(s)</th>
                        <th>Amortization Period | {paymentState.amortizationPeriod} year(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of Payments</td>
                        <td>{paymentState.term * paymentState.paymentFrequency}</td>
                        <td>{paymentState.amortizationPeriod * paymentState.paymentFrequency}</td>
                    </tr>
                    <tr>
                        <td>Mortgage Payment</td>
                        <td>${addComma(paymentState.mortgagePayment)}</td>
                        <td>${addComma(paymentState.mortgagePayment)}</td>
                    </tr>
                    <tr>
                        <td>Principal Payment</td>
                        <td>${addComma(roundToFixed((paymentState.mortgagePayment * paymentState.term * paymentState.paymentFrequency) - (paymentState.interestAtTerm), 2))}</td>
                        <td>${addComma(paymentState.principalAmount)}</td>
                    </tr>
                    <tr>
                        <td>Interest Payments</td>
                        <td>${addComma(paymentState.interestAtTerm)}</td>
                        <td>${addComma(paymentState.totalInterest)}</td>
                    </tr>
                    <tr>
                        <td>Total Cost</td>
                        <td>${addComma(roundToFixed(paymentState.mortgagePayment * paymentState.term * paymentState.paymentFrequency), 2)}</td>
                        <td>${addComma(paymentState.totalAmount)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="mortgageSummary">
            <h2>Mortgage Summary</h2>
            
            <p>Over the <b>{paymentState.amortizationPeriod}</b>-year amortization period, you will:</p>
            <p>have made <b>{paymentState.amortizationPeriod * paymentState.paymentFrequency}</b> ({paymentState.paymentFrequency}x per year) payments of <b>${addComma(paymentState.mortgagePayment)}</b>.</p>
            <p>have paid $<b>{addComma(paymentState.principalAmount)}</b> in principal, <b>${addComma(paymentState.totalInterest)}</b> in interest, for a total of <b>${addComma(paymentState.totalAmount)}</b></p>

            <p>Over the <b>{paymentState.term}</b>-year term, you will:</p>

            <p>have made <b>{paymentState.term * paymentState.paymentFrequency}</b> ({paymentState.paymentFrequency}x per year) payments of  <b>${addComma(paymentState.mortgagePayment)}</b>.</p>
            <p>have paid <b>${addComma(roundToFixed((paymentState.mortgagePayment * paymentState.term * paymentState.paymentFrequency) - (paymentState.interestAtTerm), 2))}</b> in principal, <b>${addComma(paymentState.interestAtTerm)}</b> in interest, for a total of <b>${addComma(roundToFixed(paymentState.mortgagePayment * paymentState.term * paymentState.paymentFrequency), 2)}</b>.</p>
        </div>
    </div>)
}