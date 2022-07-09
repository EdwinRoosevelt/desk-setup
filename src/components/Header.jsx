import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "@mantine/core";

function Header() {
  const location = useLocation()
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") setStep(0);
    else if (location.pathname === "/select") setStep(1);
    else if (location.pathname === "/assemble") setStep(2);
    else if (location.pathname === "/finish") setStep(3);
  }, [location]);

  // function stepClickHandler(s) {
  //   console.log(s);
  //   if (s === 0) navigate("/");
  //   else if (s === 1) navigate("/select");
  //   else if (s === 2) navigate("/assemble");
  // }

  return (
    <div className="container w-75 p-sm-5 py-2">
      <h1 className="text-center display-4 mb-5">Desk setup</h1>

      <Stepper color="rgb(94, 203, 223)" active={step}  breakpoint="sm">
        <Stepper.Step label="Get Started" description="from here" />
        <Stepper.Step label="Select" description="desk items" />
        <Stepper.Step label="Assemble" description="desk items" />
      </Stepper>
    </div>
  );
}

export default Header