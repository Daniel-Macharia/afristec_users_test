import DataTable from 'react-data-table-component';
import './App.css'
import type { User } from './models';
import { fetchUsers } from './service/user_service';
import { useEffect, useRef, useState } from 'react';


import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import UserDetails from './user_details';

function App() {

  const [tableData, setTableData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const searchBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {fetchUsers().then( (result: User[]) => {
                    console.log("users");
                    console.log(result);
                    setTableData(result);
                    setFilteredData(result);
                  })
                  .catch( Error )
                  {
                    console.log("Failed to load users: " + Error)
                  }}, []);

  const searchValueDataChange  = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const value = event.target?.value;

    console.log(value);
    setFilteredData( tableData.filter( user => user.user_name.toLowerCase().includes(value) ||
  user.user_phone.toLowerCase().includes(value) || user.user_email.toLowerCase().includes(value) ) );
  };

  console.log(tableData);

  const renderTopBar = () => {
    return (<>
        <div className='col-12'> 
          <div className='row'>
            <div className='col-8 p-2' >
              <h3 className='col-12'>User Details</h3>
            </div>
            <div className='col-4 p-2'>
              <input
                ref={searchBoxRef}
                className='col-12 form-control'
                type='text'
                placeholder={"search"}
                onChange={searchValueDataChange}
              />

            </div>
          </div>
        </div>
    </>);
  };
  
  return (
    
    <>

      <div className='col-12'>
        <div className='col-12'>
          {renderTopBar()}
        </div>

        <div className='col-12'>
          {
            filteredData.map( 
              datum => <div className='col-12 card m-1'>
                          <UserDetails 
                            user_name={datum.user_name}
                            user_email={datum.user_email}
                            user_phone={datum.user_phone}
                          /> 
                        </div>)
          }
        </div>
      </div>
    </>
  )
}

export default App;
