import React from "react";
import { getData } from "../lib/fetch";
import { useQuery } from "@tanstack/react-query";

const Home = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery(["drones"], () =>
    getData("").then(res => res.data)
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

  const pilots = Object.keys(data).map(key => data[key]);

  return (
    <div className='container'>
      <h1 className=''>Bird Nest 🪺 🦤</h1>
      <h2>Pilots violating birds peace:</h2>
      <p>Information within the last 10 minutes</p>
      <ol className='list-group list-group-numbered'>
        {pilots.map(pilot => (
          <li className='list-group-item' key={pilot.pilot_id}>
            {pilot.first_name} {pilot.last_name}, email: {pilot.email}, phone:{" "}
            {pilot.phone}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
