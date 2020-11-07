// import React, { useState } from "react";
// //define the styled text use Typhography
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// //state
// //state used to store the component data.
// //useState is the predefined class, used to define the state in functional component.

// //React.Fragment to encapsulate the component code.
// function State() {
//   const [sub, setSub] = useState("ReactJS");
//   return (
//     <React.Fragment>
//       <Typography variant="h1" color="secondary">
//         {sub}
//       </Typography>
//       <br></br>
//       <br></br>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => {
//           setSub("React Native");
//         }}
//       >
//         Change Sub
//       </Button>
//     </React.Fragment>
//   );
// }

// export default State;

import React, { useState } from "react";
import Typhography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { TableBody } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  c1: {
    backgroundColor: "grey",
  },
  c2: {
    backgroundColor: "lightblue",
  },
});

// function myfun() {
//   console.log("hello");
// }
function State() {
  const [pid, setPid] = useState(111);
  const [pname, setPname] = useState("p_one");
  const [pcost, setPcost] = useState(10000);
  const classes = useStyles();

  //   function myfun() {
  //     setPid(123);
  //     setPname("Product_one");
  //     setPcost(20000);
  //   }
  let myfun = () => {
    setPid(123);
    setPname("Product_one");
    setPcost(20000);
  };

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead className={classes.c1}>
            <TableRow>
              <TableCell>
                <Typhography variant="h6" color="primary">
                  P_ID
                </Typhography>
              </TableCell>
              <TableCell>
                <Typhography variant="h6" color="primary">
                  P_NAME
                </Typhography>
              </TableCell>
              <TableCell>
                <Typhography variant="h6" color="primary">
                  P_COST
                </Typhography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.c2}>
            <TableCell>
              <Typhography variant="subtitle2" color="secondary">
                {pid}
              </Typhography>
            </TableCell>
            <TableCell>
              <Typhography variant="subtitle2" color="secondary">
                {pname}
              </Typhography>
            </TableCell>
            <TableCell>
              <Typhography variant="subtitle2" color="secondary">
                {pcost}
              </Typhography>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={myfun}>
        Change Subj
      </Button>
    </React.Fragment>
  );
}

export default State;
