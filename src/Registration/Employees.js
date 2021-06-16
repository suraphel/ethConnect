// take in data and save to db

import { useState } from "react";

import "./Employees.css";
import Card from "./Card";
import classes from "./Adduser.module.css";
import Button from "./Button";
// Form for Companies and free lancer professionals

const Employees = (props) => {
  const [enterCompanyName, setEnteredCompanyName] = useState("");
  const [enterCompanyBusiness, setEnteredtypeOfBusiness] = useState("");

  const companyinfoHandler = (event) => {
    event.preventDefault();
    if (
      enterCompanyName.trim().length === 0 ||
      enterCompanyBusiness.trim().length === 0
    ) {
      return;
    }
    if (+enterCompanyBusiness < 18) {
      return;
    }

    // console.log(enterCompanyName, enterCompanyBusiness);
    props.onEmployeer(enterCompanyName, enterCompanyBusiness);
    setEnteredCompanyName("");
    setEnteredtypeOfBusiness("");
  };

  const companyNameChangerHandler = (event) => {
    setEnteredCompanyName(event.target.value);
  };

  const typeOfBusinessChangerHandler = (event) => {
    setEnteredtypeOfBusiness(event.target.value);
  };

  return (
    <Card className={classes.input}>
      {/* <input type ="submit" value="Emploees Registration" /> */}
      <h2 style={{ color: "white" }}>{props.formHeader} </h2>

      <form onSubmit={companyinfoHandler}>
        <label htmlFor="companyName">Company Name: </label>
        <input
          type="text"
          id="companyName"
          value={enterCompanyName}
          onChange={companyNameChangerHandler}
        />

        <label htmlFor="typeOfBusiness">Line of business description : </label>
        <input
          type="text"
          id="typeOfBusiness"
          value={enterCompanyBusiness}
          onChange={typeOfBusinessChangerHandler}
        />

        <label htmlFor="orgNumber">Organization Number: </label>
        <input type="number" id="orgNumber" />

        <label htmlFor="contactInfo"> Contact information: </label>
        <input type="text" id="contactInfo" />

        <label>Location : </label>
        <input type="text" placeholder={props.Location} name="name" />

        <label htmlFor="Address">Address: </label>
        <input type="text" id="Address" />

        <Button type="submit"> Submit </Button>
      </form>

      {/* All input to be sent to Db */}
    </Card>
  );
};

Employees.defaultProps = { Location: "Addis Abeba, Ethiopia" };

export default Employees;
