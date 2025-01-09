const ButtonContainer = ({ handelButtonClick }) => {
  const buttonListArr = [
    "(",
    ")",
    "Del",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  // const setButtonColor = () => {
  //   const buttonColor = {
  //     blue,
  //     red,
  //   };

  //   if(buttonListArr[])
  // };
  return (
    <div className="button-container">
      {buttonListArr.map((button) => (
        <button
          className="button"
          key={button}
          value={button}
          onClick={handelButtonClick}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
