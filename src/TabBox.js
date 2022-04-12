import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowCircleUp from "@mui/icons-material/FileUpload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import uploadButton from "./uploadButton.png";

const Input = styled("input")({
  display: "none",
});

export default function TabBox() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ justifyContent: "center" }}
          aria-label="icon label tabs example"
          centered
        >
          <Tab
            icon={<ArrowCircleUp fontSize="large" />}
            label="UPLOAD"
            value="1"
          />
          <Tab
            icon={<FavoriteIcon fontSize="large" />}
            label="IMAGE PREVIEW"
            value="2"
          />
          <Tab
            icon={<PersonPinIcon fontSize="large" />}
            label="SELECT ALGORITHM"
            value="3"
          />
        </Tabs>
        <TabPanel value="1" sx={{ px: { sm: "15%" } }}>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <label htmlFor="image-file-button" style={{ paddingTop: "100px" }}>
              <Input accept="image/*" id="image-file-button" type="file" />
              <Button
                variant="contained"
                component="span"
                onClick={() => {
                  handleChange("", "2");
                }}
                endIcon={<PhotoCamera style={{ fontSize: "30px" }} />}
                size="large"
                style={{
                  backgroundColor: "#1976D2",
                  textTransform: "none",
                  width: "650px",
                  height: "80px",
                  fontSize: "25px",
                  // TODO
                  // "&:hover": {
                  //   backgroundColor: "#121212",
                  // },
                }}
              >
                <b>Upload</b>
              </Button>
            </label>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}
