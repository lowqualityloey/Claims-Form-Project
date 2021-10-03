import React, { Fragment, useState } from "react";

import TextField from "@mui/material/TextField";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DateFnsUtils from "@date-io/date-fns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./css/inputForm.css";

const InputForm = () => {
  const [description, setDescription] = useState(null);

  const [policyNumber, setPolicyNumber] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [condition, setCondition] = useState("");
  const [date, setDate] = useState(null);
  const [symptomsDetails, setSymptomsDetails] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [provider, setProvider] = useState("");
  const [providerAlt, setProviderAlt] = useState(false);
  const [providerAltName, setProviderAltName] = useState("");
  const [providerAltDesc, setProviderAltDesc] = useState("");
  const [consent, setConsent] = useState(false);

  const onSubmit = async (event) => {
    let error = false;
    event.preventDefault();
    if (policyNumber.length < 8) {
      toast.info("Policy Number must be 8 in characters", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (isNaN(policyNumber)) {
      toast.error("Policy Number must be a Number", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (customerID.length < 6) {
      toast.info("Customer ID Number must be 6 in characters", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (isNaN(customerID)) {
      toast.error("Customer ID must be a Number", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (date === null) {
      toast.info("Date must be picked", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (serviceType === "") {
      toast.info("Medical Services must be selected", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return (error = true);
    }
    if (error === false) {
      try {
        console.log("TESTTTT");
        const body = { description };
        await fetch(`${process.env.REACT_APP_API_URL}/form`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const handlePolicyNumber = (event) => {
    setPolicyNumber(event.target.value);
  };
  const handleCustomerID = (event) => {
    setCustomerID(event.target.value);
  };
  const handleCondition = (event) => {
    setCondition(event.target.value);
  };
  const handleSymptomsDetails = (event) => {
    setSymptomsDetails(event.target.value);
  };
  const handleServiceType = (event) => {
    setServiceType(event.target.value);
  };
  const handleProvider = (event) => {
    setProvider(event.target.value);
  };
  const handleProviderAltTrue = (event) => {
    setProviderAlt(true);
  };
  const handleProviderAltFalse = (event) => {
    setProviderAlt(false);
    setProviderAltName("");
    setProviderAltDesc("");
  };

  const handleProviderAltName = (event) => {
    setProviderAltName(event.target.value);
  };
  const handleProviderAltDesc = (event) => {
    setProviderAltDesc(event.target.value);
  };
  const handleConsent = (event) => {
    setConsent(event.target.checked);
  };

  return (
    <Fragment>
      <h1 className="title-header text-center mt-5">
        Health Insurance Claim Form
      </h1>
      <div className="text-description text-left mt-4">
        Please be aware that it may be necessary to request further information
        before completing the assessment for your claim.
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="category-title">Details</div>
          <div className="inline-flex">
            <div>
              <TextField
                required
                className="form-width"
                id="policyNumber"
                value={policyNumber}
                onChange={handlePolicyNumber}
                label="Policy No."
                variant="outlined"
                inputProps={{ maxLength: 8 }}
              />
            </div>
            <div>
              <TextField
                required
                className="form-width"
                id="customerID"
                value={customerID}
                onChange={handleCustomerID}
                label="Customer ID"
                variant="outlined"
                inputProps={{ maxLength: 6 }}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="category-title">Claim Details</div>
          <div>
            <TextField
              required
              fullWidth
              id="condition"
              value={condition}
              onChange={handleCondition}
              label="What condition you wishes to claim for?"
              variant="outlined"
            />
          </div>
          <div className="inline-flex">
            <div>When did you first have symptoms?</div>
            <div>
              <LocalizationProvider dateAdapter={DateFnsUtils}>
                <MobileDatePicker
                  label="MM/DD/YYYY"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="symptomDetails"
              value={symptomsDetails}
              onChange={handleSymptomsDetails}
              label="Details of Symptoms"
              variant="outlined"
            />
          </div>
          <div className="inline-flex">
            <div>What Type of Medical Services</div>
            <div>
              <FormControl sx={{ minWidth: 170, maxWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Medical Services
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={serviceType}
                  onChange={handleServiceType}
                  autoWidth
                  label="Medical Services"
                >
                  <MenuItem value="Doctor care">Doctor care</MenuItem>
                  <MenuItem value="Nursing care">Nursing care</MenuItem>
                  <MenuItem value="Physical Therapy">Physical Therapy</MenuItem>
                  <MenuItem value="Mental Health">Mental Health</MenuItem>
                  <MenuItem value="Dental Care">Dental Care</MenuItem>
                  <MenuItem value="Child health">Child health</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="provider"
              value={provider}
              onChange={handleProvider}
              label="Name of Service Provider/Facility"
              variant="outlined"
            />
          </div>

          <div>
            Do you have a health policy with another provider you could claim on
            for this condition?
          </div>
          <div>
            <RadioGroup
              aria-label="providerAlt"
              name="radio-buttons-group"
              defaultValue="no"
            >
              <div className="center-flex">
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  onChange={handleProviderAltTrue}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  onChange={handleProviderAltFalse}
                />
              </div>
            </RadioGroup>
          </div>
          <div>
            <TextField
              required
              disabled={providerAlt === false}
              fullWidth
              id="providerAltName"
              value={providerAltName}
              onChange={handleProviderAltName}
              label="Name of Different Health Provider"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              disabled={providerAlt === false}
              fullWidth
              id="providerAltDesc"
              value={providerAltDesc}
              onChange={handleProviderAltDesc}
              label="Description of Health Policy on different health provider"
              variant="outlined"
              multiline
              rows={3}
            />
          </div>
        </div>
        <div className="agreement-container">
          <span className="text-agreement">
               "As part of an insurance claim with enSURE, I consent and give
            authority to enSURE and any of its related entities and agents to
            collect, use and disclose, any medical, financial or other personal
            information about the life assured for the purposes of assessing and
            managing the insurance claim. I declare that all medical information
            pertaining to me and relevant to my insurance claim has been
            provided and disclosed to enSURE, and understand that making any
            false or fraudulent claim could result in cancellation of my policy
            and/or oblige me to repay any claims."
          </span>
        </div>
        <div className="consent-container ">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  required
                  onChange={handleConsent}
                  sx={{
                    color: red[800],
                    "&.Mui-checked": {
                      color: red[600],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="I've read  and accept the Terms and Conditions"
            />
          </FormGroup>
        </div>
        <div className="submit-btn-container center-flex">
          <button className="submit-claim-btn" type="submit">
            SUBMIT CLAIM FORM
          </button>
          <ToastContainer />
        </div>
      </form>
    </Fragment>
  );
};

export default InputForm;
