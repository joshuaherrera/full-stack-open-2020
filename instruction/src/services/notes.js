import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

// const getAll = () => {
//   const req = axios.get(baseUrl);
//   return req.then((res) => res.data);
// };

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((res) => res.data);
};
// since key has same name as variable (value), can omit keyname
export default { getAll, create, update };
