import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("https://backendexample.sanbercloud.com/api/mobile-apps")
        .then((res) => {
          setData([...res.data]);
        })
        .catch((err) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handlingSize = (param) => {
    if (param < 1000) {
      return param + " MB";
    } else {
      return (param / 1000).toFixed(1) + " GB";
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Quiz 3 | Dimas Fahrul
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/manage-data"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Manage Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold ">Find your data that you need!</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mx-5 my-5">
          {/* Batas awal Card section */}
          {data !== null &&
            data.map((item) => {
              return (
                <>
                  <div className="h-auto flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={item.image_url}
                      className="w-1/3 bg-cover bg-center bg-landscape"
                    />
                    <div className="w-2/3 p-4">
                      <h1 className="text-gray-900 font-bold text-2xl">
                        {item.name}
                      </h1>
                      <small>2019</small>
                      <p className="mt-2 text-gray-600 text-sm">
                        {item.description}
                      </p>
                      <div className=" item-center mt-2 text-gray-500">
                        <span className="font-semibold">{item.category}</span>
                        <br />
                        <span className="font-semibold">
                          {handlingSize(item.size)}
                        </span>
                        <br />
                        {item.is_android_app === 1 && item.is_ios_app === 0 ? (
                          <span className="font-semibold">Android</span>
                        ) : item.is_android_app === 0 &&
                          item.is_ios_app === 1 ? (
                          <span className="font-semibold">iOS</span>
                        ) : item.is_android_app === 1 &&
                          item.is_ios_app === 1 ? (
                          <span className="font-semibold">Android & iOS</span>
                        ) : (
                          <span></span>
                        )}
                      </div>
                      <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                          {item.price === 0
                            ? "Free"
                            : "Rp. " + item.price.toLocaleString()}
                        </h1>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                          {item.rating} Ratings
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          {/* Batas akhir Card section */}
        </div>
      </section>
    </>
  );
}

export default Home;
