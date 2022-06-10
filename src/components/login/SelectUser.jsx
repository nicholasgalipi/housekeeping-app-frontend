import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select } from '@chakra-ui/react';

export default function SelectUser(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/employee/allEmployees`
        );
        setData(response.data);
        console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (props.click==1) {
    return;
  }
  if (props.click==2 && loading==false) {
    return (
      <Select
        // onChange={e => { 
        //   employeeIdHandler(e.target.value);
        // }}
        placeholder="Employee name"
      >
        {data.map(data => {
          return (
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          );
        })}
      </Select>
    );
  }
}
