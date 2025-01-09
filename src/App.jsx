import { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setcalVal] = useState("");
  const handelButtonClick = (event) => {
    const buttonValue = event.target.value;
    try {
      if (buttonValue == "Del") {
        setcalVal(calVal.slice(0, -1));
      } else if (buttonValue == "AC") {
        setcalVal("");
      } else if (buttonValue == "=") {
        setcalVal(eval(calVal));
      } else {
        calVal += buttonValue;
        setcalVal(calVal);
      }
    } catch (error) {
      setcalVal(error);
    }
  };

  return (
    <div className="calculator-container">
      <Display calVal={calVal} />
      <ButtonContainer handelButtonClick={handelButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
