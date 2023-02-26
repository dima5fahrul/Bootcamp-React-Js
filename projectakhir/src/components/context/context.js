import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const navigate = useNavigate();
  const [idData, setIdData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const getJobDataVacancy = useCallback(async () => {
    if (fetchStatus) {
      await axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
          console.log("masuk res", res);
        })
        .catch((err) => {
          console.log(err);
          console.log("masuk err", err);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const convertMoney = (money) => {
    let dollar = money / 14000;
    return dollar.toFixed(2);
  };

  const handleTakeId = (event) => {
    let id = parseInt(event.target.value);
    navigate(`/detail/${id}`);
    console.log("masuk handleTakeId", id);
  };

  let state = {
    data,
    idData,
    setIdData,
    fetchStatus,
    setFetchStatus,
    getJobDataVacancy,
    convertMoney,
    handleTakeId,
  };

  return (
    <GlobalContext.Provider value={{ state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
