
import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";

const columns = [
  {
   name: "id",
   label: "ID",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
    name: "name",
    label: "NAME",
    options: {
     filter: true,
     sort: false,
    }
   },
  {
   name: "username",
   label: "USERNAME",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "email",
   label: "EMAIL",
   options: {
    filter: true,
    sort: false,
   }
  },
 ];

const options = {
  filterType: 'checkbox',
};

const AccountComponent = () => {
  const [selectedFile, setFile] = useState(null);
  const [data, setData] = useState([])  
  
var onFileUpload;



  const onFileChange = (event) => {
    
    // Update the state
    setFile(event.target.files[0]);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      return response.json();
     }).then((data_) => {
       console.log(data_);
       setData(data_);
  })
  };
  

    const fileData = () => { 

      if (selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {selectedFile.name}</p> 
            <p>File Type: {selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
          </div> 
        ); 
      } 
    }; 
     
      return ( 
        <div> 
            <h1> 
            Upload page which accepts only Excel file 
            </h1> 
            <h3> 
              Excel File Upload using React! 
            </h3> 
            <div>  
            <input type='file' onChange={onFileChange} accept='.xlsx' />

                {/* <button onClick={onFileUpload}> 
                  Upload! 
                </button>  */}
            </div> 
          {fileData()} 
          <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
        </div> 
      ); 
              }
  
export default AccountComponent;