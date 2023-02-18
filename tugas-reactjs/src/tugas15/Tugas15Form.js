import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { TextInput, Label, Button } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

const Tugas15Form = () => {
  // Params
  const { variableIdData } = useParams();

  // Membuat context
  const { state, handleFunction } = useContext(GlobalContext);
  const { fetchStatus, setFetchStatus, input, setInput } = state;

  // Membuat Function
  const { handleSubmit, handleInput } = handleFunction;

  // Fetch data from API
  useEffect(() => {
    if (variableIdData !== undefined) {
      axios
        .get(
          `https://backendexample.sanbercloud.com/api/student-scores/${variableIdData}`
        )
        .then((res) => {
          let data = res.data;
          setInput({
            name: data.name,
            course: data.course,
            score: data.score,
          });
        });
    }

    return () => {
      // Cleanup
      setInput({ name: "", course: "", score: "" });
    };
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
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
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/tugas15"}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tugas 15
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="my-10">
        <div className="container mx-auto w-4/5">
          <form className="block items-center" onSubmit={handleSubmit}>
            <div>
              <div className="my-2 block">
                <Label htmlFor="name" value="Nama" />
              </div>
              <TextInput
                id="name"
                type="name"
                onChange={handleInput}
                value={input.name}
                name="name"
                placeholder="Masukkan nama"
                required={true}
                shadow={true}
              />
            </div>
            <div>
              <div className="my-2 block">
                <Label htmlFor="course" value="Mata Kuliah" />
              </div>
              <TextInput
                id="course"
                type="course"
                onChange={handleInput}
                value={input.course}
                name="course"
                placeholder="Masukkan mata kuliah"
                required={true}
                shadow={true}
              />
            </div>
            <div>
              <div className="my-2 block">
                <Label htmlFor="score" value="Nilai" />
              </div>
              <TextInput
                id="score"
                type="score"
                onChange={handleInput}
                value={input.score}
                name="score"
                placeholder="Masukkan nilai"
                required={true}
                shadow={true}
              />
            </div>
            <Button
              type="submit"
              className="mb-20 mt-4 w-full bg-purple-500 hover:bg-purple-600"
            >
              Kirim
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Tugas15Form;
