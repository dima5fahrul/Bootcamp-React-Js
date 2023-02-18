import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageData = () => {
  const maxDescriptionLength = 20;
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    release_year: 2007,
    size: 1,
    price: 0,
    rating: 0,
    image_url: "",
    is_android_app: 0,
    is_ios_app: 0,
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [ID_MOBILE_APPS, setID_MOBILE_APPS] = useState(-1);

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

  const shortenDescription = (description) => {
    if (description.length <= maxDescriptionLength) {
      return description;
    }
    return `${description.substr(0, maxDescriptionLength)}...`;
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let check = event.target.checked ? 1 : 0;

    if (name === "is_android_app" || name === "is_ios_app") {
      setInput({ ...input, [name]: check });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleEdit = (event) => {
    let ID_MOBILE_APPS = parseInt(event.target.value);
    setID_MOBILE_APPS(ID_MOBILE_APPS);

    axios
      .get(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
      )
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
          description: data.description,
          category: data.category,
          release_year: data.release_year,
          size: data.size,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
          is_android_app: data.is_android_app,
          is_ios_app: data.is_ios_app,
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let {
      name,
      description,
      category,
      release_year,
      size,
      price,
      rating,
      image_url,
      is_android_app,
      is_ios_app,
    } = input;

    if (ID_MOBILE_APPS === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/mobile-apps", {
          name,
          description,
          category,
          release_year,
          size,
          price,
          rating,
          image_url,
          is_android_app,
          is_ios_app,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      // Update data
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`,
          {
            name,
            description,
            category,
            release_year,
            size,
            price,
            rating,
            image_url,
            is_android_app,
            is_ios_app,
          }
        )
        .then((res) => {
          setFetchStatus(true);
        });
    }
    // Reset input
    setID_MOBILE_APPS(-1);

    setInput({
      name: "",
      description: "",
      category: "",
      release_year: 2007,
      size: 1,
      price: 0,
      rating: 0,
      image_url: "",
      is_android_app: 0,
      is_ios_app: 0,
    });
  };

  const handleDelete = (event) => {
    let ID_MOBILE_APPS = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
      )
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

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

      <section className="my-10">
        <div className="container mx-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  NO
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kategori
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Deksripsi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tahun Rilis
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ukuran
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Android
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  IOS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data !== null &&
                data.map((item, index) => {
                  return (
                    <>
                      <tr key={item.index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {shortenDescription(item.description)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.price === 0
                            ? "Free"
                            : "Rp " + item.price.toLocaleString()}
                        </td>
                        <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.rating}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.release_year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {handlingSize(item.size)}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                          {item.is_android_app ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          )}
                        </td>
                        <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.is_ios_app ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          )}
                        </td>
                        <td className="flex gap-2">
                          <button
                            className="bg-purple-500 text-white rounded-lg p-3 my-2 font-medium hover:bg-purple-600"
                            onClick={handleEdit}
                            value={item.id}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-600 text-white rounded-lg p-3 my-2 font-medium hover:bg-red-700"
                            onClick={handleDelete}
                            value={item.id}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={input.name}
            name="name"
            id="name"
            type="text"
            placeholder="Masukkan Nama"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Deskripsi
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Masukkan Deskripsi"
            onChange={handleInput}
            value={input.description}
            name="description"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="category"
          >
            Kategori
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="category"
            placeholder="Masukkan Kategori"
            onChange={handleInput}
            value={input.category}
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="release_year"
          >
            Tahun Rilis
          </label>
          <div className="relative inline-flex">
            <select
              id="release_year"
              name="release_year"
              value={input.release_year}
              onChange={handleInput}
              required={true}
              className="form-select w-full py-2 pl-3 pr-10 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            >
              <option value="">Pilih Tahun Rilis</option>
              {Array.from({ length: 15 }, (_, i) => 2007 + i).map((tahun) => (
                <option key={tahun} value={tahun}>
                  {tahun}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-gray-400"
                viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="size">
            Ukuran File (MB):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Masukkan Ukuran File (MB)"
            onChange={handleInput}
            value={input.size}
            name="size"
            required={true}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="price" className="text-gray-800 font-semibold mb-2">
            Price:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">IDR</span>
            </div>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              value={input.price}
              onChange={handleInput}
              className="border border-gray-400 py-2 pl-10 pr-3 rounded-md text-gray-800"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="rating" className="text-gray-800 font-semibold mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={input.rating}
            onChange={handleInput}
            className="border border-gray-400 py-2 px-3 rounded-md text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Gambar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Masukkan Link Gambar"
            onChange={handleInput}
            value={input.image_url}
            name="image_url"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Platform</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="is_android_app"
                checked={input.is_android_app === 1}
                onChange={handleInput}
              />
              <span className="ml-2 text-gray-700">Android</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="is_ios_app"
                onChange={handleInput}
                checked={input.is_ios_app === 1}
              />
              <span className="ml-2 text-gray-700">iOS</span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default ManageData;
