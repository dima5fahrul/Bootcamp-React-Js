import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./context/context";
import Navbar from "./sections/navbar";
import "../index.css";
import MyFooter from "./sections/footer";

const Detail = () => {
  const { state } = useContext(GlobalContext);
  const { idData, setIdData, fetchStatus, setFetchStatus, convertMoney } =
    state;
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
          let data = res.data;
          console.log("data id", data);
          setIdData({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
          console.log("Ambil idData", idData.title);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <Navbar />

      <div className="mt-28 w-full">
        <div className="flex flex-col text-justify justify-center items-center mx-10 md:mx-20 rounded-lg bg-white shadow-lg dark:bg-neutral-700 border-2 border-gray-50 p-6">
          <img
            className="w-24 h-24 text-center rounded-full border-2 border-white shadow-md my-auto md:w-32 md:h-32"
            src={idData.company_image_url}
          />
          <div className="justify-start">
            <div className="text-center block">
              <h5 className="my-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 md:text-2xl">
                {idData.title}
              </h5>
              <h5 className="my-2 text-base md:text-xl font-normal text-neutral-800 dark:text-neutral-50">
                {idData.company_name}
              </h5>
              <p className="my-2 text-xs md:text-base text-neutral-600 dark:text-neutral-200">
                {idData.company_city}, Indonesia
              </p>
              <div className="my-4 text-base md:text-xl font-semibold">
                {idData.job_status === 1 ? (
                  <p className="text-green-600 dark:text-neutral-200">
                    Open to Apply
                  </p>
                ) : (
                  <p className="text-red-600">Closed to Apply</p>
                )}
              </div>
              <div className="flex flex-row gap-4 justify-center my-6 md:my-8">
                <p className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-200">
                  ${convertMoney(idData.salary_min)}
                  <p className="text-xs md:text-2xl inline-flex align-baseline">
                    /month
                  </p>
                </p>
                <p className="text-xl md:text-3xl mx-2 font-normal text-neutral-800 dark:text-neutral-200">
                  <p className="inline-flex align-middle">-</p>
                </p>
                <p className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-200">
                  ${convertMoney(idData.salary_max)}
                  <p className="text-xs md:text-2xl inline-flex align-baseline">
                    /month
                  </p>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-start my-6 md:my-8 text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
              <p className="">{idData.job_tenure}</p>
              <p className="mx-2">-</p>
              <p className="">{idData.job_type}</p>
            </div>
            <p className="mt-4 text-sm md:text-base list-none font-medium text-neutral-800 dark:text-neutral-200">
              Requirements:
            </p>
            <ul className="list-none text-justify flex flex-row gap-4 my-2 justify-start text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200">
              <li className="text-sm md:text-base text-neutral-600 dark:text-neutral-200">
                {idData.job_qualification}
              </li>
            </ul>
            <p className="text-justify my-5 text-sm md:text-base text-neutral-600 dark:text-neutral-200">
              {idData.job_description}
            </p>
            <p className="text-xs mt-5 text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
      </div>

      <MyFooter />
    </>
  );
};

export default Detail;
