import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Search, Bell } from "lucide-react";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #e2e8f0",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <TextField
          placeholder="Filter by name or description..."
          variant="outlined"
          size="small"
          sx={{
            flexGrow: 1,
            maxWidth: 300,
            "& .MuiOutlinedInput-root": {
              bgcolor: "#f8fafc",
              borderRadius: "10px",
              "& fieldset": {
                borderRadius: "10px",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={16} />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            border: "1px solid rgb(69, 37, 37)",
            borderRadius: "8px",
            p: 0.1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <Bell size={15} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
