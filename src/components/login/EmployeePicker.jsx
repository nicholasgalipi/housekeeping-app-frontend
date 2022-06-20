import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Skeleton, Select } from '@chakra-ui/react';

function EmployeePicker({employeeHandler, selected}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const employeeIdHandler = (name) =>{
        let emp = data.filter((data) => {return data.name === name})
        employeeHandler(emp[0]._id)
    }
    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(
            `http://localhost:3001/employee/allEmployees`
            );
            setData(response.data);
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
    if(loading){
        return <Skeleton height='20px' />
    }
    if(!loading && selected === 'user'){
        return (
            <Select onChange={(e) => {employeeIdHandler(e.target.value)}} placeholder='Employee name' maxW='40'>
                {data.map((data) => {return <option key={data.name} value={data.name}>{data.name}</option>})}
               
            </Select>
      )
    }
}

export default EmployeePicker