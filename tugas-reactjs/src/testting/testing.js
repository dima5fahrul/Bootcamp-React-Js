import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Testing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://backendexample.sanbercloud.com/api/contestants")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <ul>
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <li> {res.name} </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Testing;
