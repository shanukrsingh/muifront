import axios from "axios";

import React, { useState } from "react";

// class NewUp extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios
//       .post(
//         "http://localhost:8080/api/algorithms/nearest_neighbour/2",
//         formData
//       )
//       .then(
//         fetch("http://localhost:8080/api/algorithms/nearest_neighbour/2", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//         })
//           .then((response) => {
//             return response.text();
//           })
//           .then((data) => {
//             console.log(JSON.parse(data));
//             this.setState({ pic: JSON.parse(data) });
//           })
//       );
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {this.state.selectedFile.name}</p>

//           <p>File Type: {this.state.selectedFile.type}</p>

//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>GeeksforGeeks</h1>
//         <h3>File Upload using React!</h3>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }

const NewUp = () => {
  //   state = {
  //     // Initially, no file is selected
  //     selectedFile: null,
  //   };

  const [selectedFile, setSelectedFile] = useState(null);
  const [pic, setPic] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("multiPartFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios
      .post(
        "http://localhost:8080/api/algorithms/nearest_neighbour/2",
        formData
      )
      .then(
        fetch("http://localhost:8080/api/algorithms/nearest_neighbour/2", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.status == 200) {
            getImage();
          }
        })

        //   .then((data) => {
        //     console.log(JSON.parse(data));
        //     setPic(JSON.parse(data));
        //   })
      );
  };

  const getImage = async () => {
    const res = await fetch("http://localhost:8080/api/algorithms");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setPic(imageObjectURL);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <h3>File Upload using React!</h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {fileData()}
      {pic && (
        <div>
          <img src={pic} alt="skdfks" srcSet="" />
        </div>
      )}
    </div>
  );
};

export default NewUp;
