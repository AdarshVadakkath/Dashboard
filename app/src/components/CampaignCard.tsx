import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  IconButton,
  Avatar,
} from "@mui/material";
import { MoreHorizontal, Mail, Clock } from "lucide-react";

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
  openedPercent: number;
  clickedPercent: number;
  convertedPercent: number;
  comments: number;
  reactions: number;
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
        return {
          bgcolor: "#dcfce7",
          color: "#16a34a",
        };
      case "Completed":
        return {
          bgcolor: "#e0f2fe",
          color: "#0277bd",
        };
      case "Draft":
        return {
          bgcolor: "#f3f4f6",
          color: "#6b7280",
        };
      default:
        return {
          bgcolor: "#f3f4f6",
          color: "#6b7280",
        };
    }
  };

  return (
    <Card
      sx={{
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e2e8f0",
        borderRadius: 3,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          {/* Campaign Icon */}
          <Avatar
            sx={{
              bgcolor: campaign.iconBg,
              width: 48,
              height: 48,
              fontSize: "1.5rem",
              flexShrink: 0,
            }}
          >
            {campaign.icon}
          </Avatar>

          {/* Main Content */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            {/* Title */}
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#1f2937",
                }}
              >
                {campaign.title}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 3,
                lineHeight: 1.5,
                color: "#6b7280",
              }}
            >
              {campaign.description}
            </Typography>

            {/* Metrics */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                width: "100%",
                mt: 2,
              }}
            >
              <Box sx={{ textAlign: "center", py: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#111827",
                    mb: 0.5,
                  }}
                >
                  {formatNumber(campaign.delivered)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Delivered
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", py: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#111827",
                    mb: 0.5,
                  }}
                >
                  {campaign.openedPercent}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Opened
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", py: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#111827",
                    mb: 0.5,
                  }}
                >
                  {campaign.clickedPercent}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Clicked
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", py: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#111827",
                    mb: 0.5,
                  }}
                >
                  {campaign.convertedPercent}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Converted
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Actions Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Chip
              label={campaign.status}
              size="small"
              sx={{
                ...getStatusColor(campaign.status),
                fontWeight: 500,
                fontSize: "0.75rem",
                height: 24,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Mail size={16} color="#9ca3af" />
              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                {campaign.comments}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Clock size={16} color="#9ca3af" />
              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                {campaign.reactions}
              </Typography>
            </Box>

            <IconButton
              size="small"
              sx={{
                color: "#9ca3af",
                "&:hover": {
                  bgcolor: "#f3f4f6",
                  color: "#6b7280",
                },
              }}
            >
              <MoreHorizontal size={16} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
