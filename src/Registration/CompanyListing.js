import React from "react";
import Card from "./Card";
import Employers from "./Employers";

const CompanyListing = (props) => {
  return (
    <Card>
      <ul>
        {/* This will take in data from externally  */}
        {props.companies.map((company) => (
          <li>
            {company.name}
            {company.BusinessType} click here
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default CompanyListing;
