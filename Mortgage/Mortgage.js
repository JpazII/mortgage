import * as React from "react";


import MVariablesForm from "./MVariableForm";
import MortgageChart from "./Mortgageform";

import mdefaultState from "./MdefaultState";


function MortgageCalc() {
  const [state, setState] = React.useState(mdefaultState);

  return (
    <div id="Mortgage">
      <h1 className="text-center">Annual Compound Interest Calculator</h1>
      <hr />
      <MVariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <MortgageChart {...state} />
    </div>
  );
}

export default MortgageCalc