import React from "react";
import { getData } from "../lib/fetch";
import { useQuery } from "@tanstack/react-query";

const Home = (): JSX.Element => {
  const {
    data: drones,
    isLoading,
    isError,
  } = useQuery(["drones"], () =>
    getData("").then(res => {
      console.log(res.data);
      return res.data;
    })
  );

  if (isError) {
    return (
      <>
        <h1>Sorry, there was an error.</h1>
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Home</h1>
      {drones}
    </>
  );
};

export default Home;
