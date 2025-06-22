import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CampaignBanner from "./components/CampaignBanner";
import CampaignsList from "./components/CampaignsList";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CampaignBanner />
                  <CampaignsList />
                </>
              }
            />
            <Route
              path="/campaigns"
              element={
                <>
                  <CampaignBanner />
                  <CampaignsList />
                </>
              }
            />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
