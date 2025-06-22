import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Card,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Plus, Filter, Tag, List, Hourglass } from "lucide-react";
import CampaignCard from "./CampaignCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface Campaign {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  status: "Running" | "Completed" | "Draft";
  delivered: number;
  opened: number;
  clicked: number;
  converted: number;
  deliveredPercent?: number;
  openedPercent: number;
  clickedPercent: number;
  convertedPercent: number;
  comments: number;
  reactions: number;
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Special Offers for Loyal Customers",
    description:
      "Thank you for being our loyal customer! As a token of our appreciation, we...",
    icon: "🎁",
    iconBg: "#6366f1",
    status: "Running",
    delivered: 5720,
    opened: 60.5,
    clicked: 17.7,
    converted: 1.2,
    openedPercent: 60.5,
    clickedPercent: 17.7,
    convertedPercent: 1.2,
    comments: 2,
    reactions: 4,
  },
  {
    id: "2",
    title: "Customer Feedback Request",
    description:
      "We would love to hear your thoughts! Please take a moment to complete o...",
    icon: "💬",
    iconBg: "#ec4899",
    status: "Running",
    delivered: 4820,
    opened: 34.5,
    clicked: 6.9,
    converted: 2.3,
    openedPercent: 34.5,
    clickedPercent: 6.9,
    convertedPercent: 2.3,
    comments: 2,
    reactions: 2,
  },
  {
    id: "3",
    title: "Product Launch Announcement",
    description:
      "We are excited to introduce our latest product, Masterclass level! Enjoy inn...",
    icon: "🚀",
    iconBg: "#10b981",
    status: "Running",
    delivered: 8650,
    opened: 72.5,
    clicked: 17.7,
    converted: 1.2,
    openedPercent: 72.5,
    clickedPercent: 17.7,
    convertedPercent: 1.2,
    comments: 3,
    reactions: 3,
  },
  {
    id: "4",
    title: "Weekly Newsletter",
    description:
      "Hi mate! Here is your weekly newsletter with the latest news, interesting art...",
    icon: "📧",
    iconBg: "#6366f1",
    status: "Running",
    delivered: 0,
    opened: 0,
    clicked: 0,
    converted: 0,
    openedPercent: 0,
    clickedPercent: 0,
    convertedPercent: 0,
    comments: 5,
    reactions: 5,
  },
];

const CampaignsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [triggerFilter, setTriggerFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Campaign status");
  const [tagsFilter, setTagsFilter] = useState("Filters by tags...");
  const [sortBy, setSortBy] = useState("All");

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      {/* Header Section */}
      <Card
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      ></Card>

      {/* Main Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Campaigns
        </Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          sx={{
            bgcolor: "#6366f1",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              bgcolor: "#5856eb",
            },
          }}
        >
          Create Campaign
        </Button>
      </Box>

      {/* Filters Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, mr: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Triggered by
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={triggerFilter}
              onChange={(e) => setTriggerFilter(e.target.value)}
              sx={{ borderRadius: 2 }}
              startAdornment={
                <InputAdornment position="start">
                  <Filter size={16} />
                </InputAdornment>
              }
            >
              <MenuItem value="All">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  All
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ flex: 1, mr: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Status
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ borderRadius: 2 }}
              startAdornment={
                <InputAdornment position="start">
                  <Hourglass size={16} />
                </InputAdornment>
              }
            >
              <MenuItem value="Campaign status">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  Campaign status
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ flex: 1, mr: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Tags
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={tagsFilter}
              onChange={(e) => setTagsFilter(e.target.value)}
              sx={{ borderRadius: 2 }}
              startAdornment={
                <InputAdornment position="start">
                  <Tag size={16} />
                </InputAdornment>
              }
            >
              <MenuItem value="Filters by tags...">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  Filters by tags...
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Sort by
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              sx={{ borderRadius: 2 }}
              startAdornment={
                <InputAdornment position="start">
                  <List size={16} />
                </InputAdornment>
              }
            >
              <MenuItem value="All">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  All
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
            },
          }}
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Active
                <Chip
                  label="24"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: "0.75rem",
                    bgcolor: "#e0f2fe",
                    color: "#0277bd",
                  }}
                />
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Completed
                <Chip
                  label="178"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: "0.75rem",
                    bgcolor: "#f3f4f6",
                    color: "#6b7280",
                  }}
                />
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Draft
                <Chip
                  label="3"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: "0.75rem",
                    bgcolor: "#f3f4f6",
                    color: "#6b7280",
                  }}
                />
              </Box>
            }
          />
        </Tabs>
      </Box>

      {/* Campaign Count and Date Range */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          24 Campaigns
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Metrics definitions
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              bgcolor: "#f9fafb",
            }}
          >
            <IconButton
              size="small"
              sx={{
                bgcolor: "#f3f4f6",
                borderRadius: 1,
                mr: 1,
                "&:hover": {
                  bgcolor: "#e0e0e0",
                },
              }}
            >
              <CalendarTodayIcon fontSize="small" />
            </IconButton>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 600 }}
            >
              19 June 2024 - 27 June 2024
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Campaign Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </Box>
    </Box>
  );
};

export default CampaignsList;
