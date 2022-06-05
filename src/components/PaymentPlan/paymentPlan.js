import { useState } from 'react';
import addComma from '../../lib/addComma/addComma';
import roundToFixed from '../../lib/roundToFixed/roundToFixed';
import showSummary from '../../lib/showSummary/showSummary';
import hideSummary from '../../lib/hideSummary/hideSummary';
import './paymentPlan.css';

const initialValues = {
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

export default function PaymentPlan(){
    const [initialState, setInitialState] = useState(initialValues);

    const numberOfPaymentsTerm = initialState.term * initialState.paymentFrequency;
    const numberOfPayments = initialState.amortizationPeriod * initialState.paymentFrequency;

    const mortgagePaymentTerm = addComma(initialState.mortgagePayment);

    const principalPaymentTerm = addComma(roundToFixed((initialState.mortgagePayment * numberOfPaymentsTerm) - (initialState.interestAtTerm), 2));
    const principalPayment = addComma(initialState.principalAmount);

    const interestPaymentsTerm = addComma(initialState.interestAtTerm);
    const interestPayments = addComma(initialState.totalInterest);

    const totalCostTerm = addComma(roundToFixed(initialState.mortgagePayment * numberOfPaymentsTerm), 2);
    const totalCost = addComma(initialState.totalAmount);

    const handleSubmit = (event) => {
        event.preventDefault();

        const interestValue = initialState.interestRate / 100 / initialState.paymentFrequency;

        const paymentValue = roundToFixed((interestValue * initialState.principalAmount) / (1 - Math.pow(1 + (interestValue), (-initialState.amortizationPeriod * initialState.paymentFrequency))), 2);

        const totalAmount = roundToFixed(paymentValue * initialState.paymentFrequency * initialState.amortizationPeriod, 2);

        const totalInterest = roundToFixed((totalAmount - initialState.principalAmount), 2)

        const interestAtTerm = roundToFixed((initialState.principalAmount*interestValue - paymentValue) * ((Math.pow(1 + interestValue, (numberOfPaymentsTerm)) - 1) / interestValue) + (paymentValue * initialState.paymentFrequency * initialState.term), 2);

        setInitialState({...initialState, mortgagePayment: paymentValue, totalAmount: totalAmount, totalInterest: totalInterest, interestAtTerm: interestAtTerm});

        showSummary();
    }

    const handleFieldChange = (event) => {
        hideSummary();
        setInitialState({...initialState, [event.target.name]: event.target.value})
    }

    return (<div id="mainContainer">
        <div id="mortgageCalculator">
            <form id="formContainer" onSubmit={handleSubmit}>
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
        <div id="calculationSummary" className="hidden">
            <h2>Calculation Summary</h2>
            <table id="summaryTable">
                <thead>
                    <tr className='tableRow'>
                        <th>Category</th>
                        <th>Term</th>
                        <th>Amortization Period</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of Payments</td>
                        <td>{numberOfPaymentsTerm}</td>
                        <td>{numberOfPayments}</td>
                    </tr>
                    <tr>
                        <td>Mortgage Payment</td>
                        <td>${mortgagePaymentTerm}</td>
                        <td>${mortgagePaymentTerm}</td>
                    </tr>
                    <tr>
                        <td>Principal Payment</td>
                        <td>${principalPaymentTerm}</td>
                        <td>${principalPayment}</td>
                    </tr>
                    <tr>
                        <td>Interest Payments</td>
                        <td>${interestPaymentsTerm}</td>
                        <td>${interestPayments}</td>
                    </tr>
                    <tr>
                        <td>Total Cost</td>
                        <td>${totalCostTerm}</td>
                        <td>${totalCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="mortgageSummary" className="hidden">
            <h2>Mortgage Summary</h2>
            
            <p>Over the <b>{initialState.amortizationPeriod}</b>-year amortization period, you will:</p>
            <p>have made <b>{initialState.amortizationPeriod * initialState.paymentFrequency}</b> ({initialState.paymentFrequency}x per year) payments of <b>${mortgagePaymentTerm}</b>.</p>
            <p>have paid $<b>{principalPayment}</b> in principal, <b>${interestPayments}</b> in interest, for a total of <b>${totalCost}</b></p>

            <p>Over the <b>{initialState.term}</b>-year term, you will:</p>

            <p>have made <b>{numberOfPaymentsTerm}</b> ({initialState.paymentFrequency}x per year) payments of  <b>${mortgagePaymentTerm}</b>.</p>
            <p>have paid <b>${principalPaymentTerm}</b> in principal, <b>${interestPaymentsTerm}</b> in interest, for a total of <b>${totalCostTerm}</b>.</p>
        </div>
    </div>)
}