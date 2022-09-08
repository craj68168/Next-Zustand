import React, { useEffect, useState } from "react";
import {usePeopleStore} from "../store/authStore";

const People = () => {
  const [peoples, setPeoples] = useState([]);
  const people = usePeopleStore((state: any) => state?.people);
  useEffect(() => {
    setPeoples(people);
  }, [people]);

  return (
    <div>
      <h3>We have {peoples.length} People in our store</h3>
      <ul>
        {peoples.map((data: any) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
