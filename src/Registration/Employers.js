// take in data and save to db

import "./Employers.css";
import Card from "./Card";
import classes from "./Adduser.module.css";
import Button from "./Button";

//Private indiviuals

const Employers = (props) => {
  const serviceHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <h2 style={{ color: "white" }}>{props.formHeader} </h2>

      <form onSubmit={serviceHandler}>
        <textarea
          cols="50"
          placeholder="Short information about the service needed"
          name="txtArea"
          style={{ height: "55px", width: "500px" }}
        ></textarea>

        <textarea
          cols="50"
          placeholder="Description"
          name="txtArea"
          style={{ height: "100px", width: "500px" }}
        ></textarea>

        <label>
          Location :
          <input type="text" placeholder={props.Location} name="name" />
        </label>

        <Button type="submit"> Submit </Button>
      </form>
    </Card>
  );
};

Employers.defaultProps = { Location: "Addis Abeba" };

export default Employers;
