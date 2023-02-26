import React, { useEffect, useContext } from "react";
import image from "../assets/logo.png";
import { GlobalContext } from "./context/context";
import "../index.css";
import MyFooter from "./sections/footer";
import Navbar from "./sections/navbar";

const LandingPage = () => {
  const { state } = useContext(GlobalContext);
  const { data, getJobDataVacancy, convertMoney, handleTakeId } = state;

  useEffect(() => {
    void getJobDataVacancy();
  }, [getJobDataVacancy]);
  console.log("data mau dambil", data);

  return (
    <>
      <Navbar />

      <section className="mt-28 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="md:pr-12">
                <div className="text-white p-3 text-center inline-flex items-center justify-center mb-6">
                  <i className="fas fa-rocket text-xl">
                    <img src={image} className="mr-3 sm:h-9" alt="Logo" />
                  </i>
                </div>
                <h3 className="text-4xl font-semibold">What Do You Do</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                  Want to find your dream job? No need to be confused anymore!
                  With our help, you can find a job that matches your interests
                  and talents.
                </p>
                <div className="mt-12">
                  <a
                    href="#"
                    className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-6 py-3 rounded shadow-lg uppercase"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Sign up</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form to create an account!
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-blue-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        style={{ transition: "all .15s ease" }}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        I agree with the{" "}
                        <a
                          href="#"
                          className="text-blue-700 hover:text-blue-800"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-700 text-white active:bg-blue-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="container mx-auto my-20 px-4">
          <div className="text-center font-semibold text-4xl">
            Find your dream job here
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {data !== null &&
              data.map((res) => {
                return (
                  <>
                    <div
                      id="app"
                      className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest"
                    >
                      <img
                        className="w-32 h-32 rounded-full border-2 border-white shadow-md mr-4 my-auto mx-5"
                        src={res.company_image_url}
                        alt="Room Image"
                      />
                      <div className="w-full flex flex-col">
                        <div className="p-4 pb-0 flex-1">
                          <h3 className="font-light mb-1 text-grey-darkest">
                            {res.title}
                          </h3>
                          <div className="text-xs flex items-center mb-4">
                            <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
                            {res.company_city}, Indonesia
                          </div>
                          <span className="text-5xl text-grey-darkest">
                            ${convertMoney(res.salary_max)}
                            <span className="text-lg">/month</span>
                          </span>
                          <div className="flex items-center mt-4">
                            <div className="pr-2 text-xs">
                              <i className="fas fa-wifi text-green" />{" "}
                              {res.job_tenure}
                            </div>
                            <div className="px-2 text-xs">
                              <i className="text-grey-darker far fa-building" />{" "}
                              {res.job_type}
                            </div>
                          </div>
                        </div>
                        <button
                          className="bg-gray-200 p-3 flex items-center justify-between transition hover:bg-grey-light"
                          onClick={handleTakeId}
                          value={res.id}
                        >
                          View More
                          <i className="fas fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            <button className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-wrap my-auto">
                <div className="ml-4">
                  <div className="text-xl font-medium text-gray-900">
                    View More
                    <div className="text-base font-normal text-gray-500">
                      Click here to view more jobs
                    </div>
                  </div>
                </div>
                <div className="ml-auto my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <MyFooter />
    </>
  );
};
export default LandingPage;
