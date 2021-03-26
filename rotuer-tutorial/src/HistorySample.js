import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HistorySample = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const handleGoHome = () => {
    history.push("/");
  };
  useEffect(() => {
    let unblock = () => {
      history.block("are you leave?");
    };
    return () => {
      if (unblock) {
        unblock();
      }
    };
  });
  return (
    <div>
      <button onClick={() => handleGoBack()}>goBack</button>
      <button onClick={() => handleGoHome()}>goHome</button>
    </div>
  );
};

export default HistorySample;
