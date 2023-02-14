import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table } from "flowbite-react";

const Tugas11 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        // Mengambil semua data property dari api
        // setData(res.data);

        // Mengambil data property yang dibutuhkan saja
        let result = res.data.map((el) => {
          let { id, name, course, score } = el;
          return { id, name, course, score };
        });
        setData(result);
      })
      .catch((err) => {});
  }, []);

  // function untuk menghandle index nilai
  const handleIndexScore = (param) => {
    console.log(data);
    if (param >= 80) return "A";
    else if (param >= 70 && param < 80) return "B";
    else if (param >= 60 && param < 70) return "C";
    else if (param >= 50 && param < 60) return "D";
    else if (param < 50) return "E";
  };

  {
    return (
      <>
        <div className="mb-20 mt-20">
          <Table>
            {/* ---------------------HeadCell------------------------------- */}
            <Table.Head className="bg-purple-600 text-white">
              <Table.HeadCell>NO</Table.HeadCell>
              <Table.HeadCell>Nama</Table.HeadCell>
              <Table.HeadCell>Mata Kuliah</Table.HeadCell>
              <Table.HeadCell>Nilai</Table.HeadCell>
              <Table.HeadCell>Index Nilai</Table.HeadCell>
            </Table.Head>
            {/* ---------------------BodyCell------------------------------- */}
            <Table.Body className="divide-y">
              {/* -------------------Row --------------------------------- */}
              {data === null && <p>Loading...</p>}
              {data !== null &&
                data.map((res, index) => {
                  return (
                    <>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell>{res.name}</Table.Cell>
                        <Table.Cell>{res.course}</Table.Cell>
                        <Table.Cell>{res.score}</Table.Cell>
                        <Table.Cell>{handleIndexScore(res.score)}</Table.Cell>
                      </Table.Row>
                    </>
                  );
                })}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  }
};

export default Tugas11;
