import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { TextInput, Label, Button, Table } from "flowbite-react";

const Tugas12 = () => {
  // Menampung data dari API
  const [data, setData] = useState(null);

  // Menambahkan data ke API
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });

  // Realtime fetch data
  const [fetchStatus, setFetchStatus] = useState(true);

  // Fetch data from API
  useEffect(() => {
    // Fetch data dengan kondisi fetchStatus
    if (fetchStatus) {
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

      // Set fetchStatus menjadi false
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // handleInput function
  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  // handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, course, score } = input;

    axios
      .post("http://backendexample.sanbercloud.com/api/student-scores", {
        name,
        course,
        score,
      })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      });

    setInput({ name: "", course: "", score: "" });
  };

  // function untuk menghandle index nilai
  const handleIndexScore = (param) => {
    console.log(data);
    if (param >= 80) return "A";
    else if (param >= 70 && param < 80) return "B";
    else if (param >= 60 && param < 70) return "C";
    else if (param >= 50 && param < 60) return "D";
    else if (param < 50) return "E";
  };

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
      <form className="flex flex-col gap-4 w-3/5 " onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
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
          <div className="mb-2 block">
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
          <div className="mb-2 block">
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
        <Button type="submit" className="mb-20">
          Kirim
        </Button>
      </form>
    </>
  );
};
export default Tugas12;
