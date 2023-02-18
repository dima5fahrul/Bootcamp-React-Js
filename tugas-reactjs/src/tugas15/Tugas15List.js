import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Tugas15List = () => {
  // Membuat context
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;

  // Membuat Function
  const { handleDelete, handleEdit, handleIndexScore } = handleFunction;

  // Fetch data from API
  useEffect(() => {
    // Fetch data dengan kondisi fetchStatus
    if (fetchStatus) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          // Mengambil semua data property dari api
          // setData([...res.data]);

          // Mengambil data property yang dibutuhkan saja
          let result = res.data.map((el) => {
            let { id, name, course, score } = el;
            return { id, name, course, score };
          });
          setData(result);
        })
        .catch((err) => {});

      // Set fetchStatus menjadi false
      setFetchStatus(false);
    }
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

      <section className="mb-20 mt-20">
        <div className="container mx-auto px-4">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 my-4 rounded">
            <Link to="/create">Tambah Data</Link>
          </button>
          <Table>
            {/* ---------------------HeadCell------------------------------- */}
            <Table.Head className="bg-purple-600 text-white text-center">
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>Nama</Table.HeadCell>
              <Table.HeadCell>Mata Kuliah</Table.HeadCell>
              <Table.HeadCell>Nilai</Table.HeadCell>
              <Table.HeadCell>Index Nilai</Table.HeadCell>
              <Table.HeadCell>Aksi</Table.HeadCell>
            </Table.Head>
            {/* ---------------------BodyCell------------------------------- */}
            <Table.Body className="divide-y">
              {/* -------------------Row --------------------------------- */}
              {data !== null &&
                data.map((res, index) => {
                  return (
                    <>
                      <Table.Row
                        key={res.id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell>{res.name}</Table.Cell>
                        <Table.Cell>{res.course}</Table.Cell>
                        <Table.Cell>{res.score}</Table.Cell>
                        <Table.Cell>{handleIndexScore(res.score)}</Table.Cell>
                        <Table.Cell className="flex gap-2">
                          <button
                            onClick={handleEdit}
                            value={res.id}
                            className="bg-purple-500 text-white rounded-lg p-3 font-medium hover:bg-purple-600"
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-600 text-white rounded-lg p-3 font-medium hover:bg-red-700"
                            onClick={handleDelete}
                            value={res.id}
                          >
                            Delete
                          </button>
                        </Table.Cell>
                      </Table.Row>
                    </>
                  );
                })}
            </Table.Body>
          </Table>
        </div>
      </section>
    </>
  );
};

export default Tugas15List;
