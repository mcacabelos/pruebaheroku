import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  StarIcon: {
    color: "#EFB810"
  },

  Valor: {
    backgroundColor: "#1AD863",
    fontSize: "15px"
  }
}));

export default function BoxFoto() {
  const classes = useStyles();

  return (
    <Box className={classes.Box}>
      <Box component="span" className={classes.Valor} m={1}>
        <Typography
          gutterBottom
          style={{ color: "#FFFFFF" }}
          variant="body1"
          component="body1"
        >
          4.5
        </Typography>
      </Box>
      <StarIcon className={classes.StarIcon} />
      <StarIcon className={classes.StarIcon} />
      <StarIcon className={classes.StarIcon} />
      <StarIcon className={classes.StarIcon} />
      <StarHalfIcon className={classes.StarIcon} />
    </Box>
  );
}
