import './App.css';
import PaymentPlan from './components/PaymentPlan/paymentPlan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mortgage Calculator
        </h1>
      </header>
      <div>
        <PaymentPlan />
      </div>
    </div>
  );
}

export default App;
