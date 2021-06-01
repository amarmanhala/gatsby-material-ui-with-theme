import { Button } from "@material-ui/core";
import * as React from "react";
import Header from "../components/Header";

function IndexPage() {
  return (
    <>
      <Header></Header>
      <Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>    </>
  );
}

export default IndexPage;
