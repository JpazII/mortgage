import * as React from "react";
import mdefaultState from "./MdefaultState";

function MVariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(mdefaultState);

  const {  loanAmount, interestRate, loanDuration } = state;

  return (
    <section>
      <h2>Financials</h2>
      <div className="flex">
        <label htmlFor="loanAmount">
          Loan Amount
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={({ target }) => setState({ ...state, loanAmount: Number(target.value) })}
          />
        </label>
        <label htmlFor="interestRate">
          Interest Rate (%)
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={({ target }) => setState({ ...state, interestRate: Number(target.value) })}
          />
        </label>
        <label htmlFor="loanDuration">
          Loan Duration
          <input
            type="number"
            id="loanDuration"
            name="loanDuration"
            value={loanDuration}
            onChange={({ target }) => setState({ ...state, loanDuration: Number(target.value) })}
          />
        </label>
        
      </div>
      <button type="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button>
    </section>
  );
}

export default MVariablesForm;
