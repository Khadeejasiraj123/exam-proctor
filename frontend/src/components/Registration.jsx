import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './Registration.scss';

function Registration({ isProctor = false }) {
  console.log("is proctor", isProctor);
  const [first_nameReg, setFirst_nameReg] = useState(null);
  const [last_nameReg, setLast_nameReg] = useState(null);
  const [emailReg, setEmailReg] = useState(null);
  const [role, setRole] = useState("user");
  const [passwordReg, setPasswordReg] = useState(null);
  const [conPasswordReg, setConPasswordReg] = useState(null);
  const [file, setFile] = useState(null);

  const baseURL = "http://localhost:3005";

  let navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const register = async () => {
    // Check if a file is selected
    if (!file) {
      window.alert("Please select a file");
      return;
    }

    if (passwordReg !== conPasswordReg) {
      return alert("Password dont match")
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Upload file


      const uploadResponse = await axios.post(`${baseURL}/api/upload`, formData)

      const proofFilename = uploadResponse.data.filename;
      alert(proofFilename)
      // Make the registration API call with filename as "proof"
      const registrationResponse = await axios.post(`${baseURL}/api/register`, {
        first_name: first_nameReg,
        last_name: last_nameReg,
        email: emailReg,
        role: isProctor ? "proctor" : "user",
        password: passwordReg,
        proof: proofFilename
      });



      console.log(`Registration response: ${registrationResponse}`);
      alert("Registeration sucessful")

      // Extract filename from the upload response  
      if (!isProctor) {
        navigate("/login");
      }


    } catch (error) {
      console.error(`Error during registration: ${error}`);
      window.alert("Error during registration");
    }
  };



  // const handleOnChange = () => {
  //   setIs_proctorReg(!is_proctorReg);
  // };

  return (
    <div className="registration">

      <h1>
        {isProctor ? "Add Proctor" : "Registration"}
      </h1>

      <form className="registration--form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          required
          id="register-first-name"
          label="First Name"
          onChange={(event) => {
            setFirst_nameReg(event.target.value);
          }}
        />
        <TextField
          required
          id="register-last-name"
          label="Last Name"
          onChange={(event) => {
            setLast_nameReg(event.target.value);
          }}
        />
        <TextField
          required
          id="register-email"
          type="email"
          label="Email"
          onChange={(event) => {
            setEmailReg(event.target.value);
          }}
        />

        <TextField
          required
          id="register-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => {
            setPasswordReg(event.target.value);
          }}
        />
        <TextField
          required
          id="register-password"
          label="Confirm Password"
          type="password"
          value={conPasswordReg}
          autoComplete="current-password"
          onChange={(event) => {
            setConPasswordReg(event.target.value);
          }}
        />


        <TextField
          type="file"
          id="file-upload"
          label="Upload Id Proof"
          InputLabelProps={{ style: { color: '#333' }, shrink: true }}

          accept="image/*"
          onChange={handleFileChange}
          required
        />

        {/* <label> Proctor</label> */}
        {/* <input
            required
            type="checkbox"
            class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3"
            checked={is_proctorReg}
            onChange={handleOnChange}
          /> */}
        {/* <div className="checkbox-wrapper">
            Are you signing up as proctor? <Checkbox required checked={is_proctorReg} 
            onChange={handleOnChange}/>
          </div> */}

        <Button
          className="mt-sm"
          variant="outlined"
          type="submit"
          onClick={register}> Register
        </Button>
      </form>
    </div>
  );
}

export default Registration;
