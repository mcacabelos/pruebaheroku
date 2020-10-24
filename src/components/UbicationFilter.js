import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup column>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="MicroCentro"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Puerto Madero"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        }
        label="Palermo"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
          />
        }
        label="Recoleta"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedE}
            onChange={handleChange}
            name="checkedE"
          />
        }
        label="Palermo Soho"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
          />
        }
        label="Guernica"
      />
    </FormGroup>
  );
}
