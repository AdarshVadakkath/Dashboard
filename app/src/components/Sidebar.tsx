import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Chip
} from '@mui/material';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Radio,
  Send,
  Users,
  Box as BoxIcon,
  Target,
  Activity,
  Database,
  FileText,
  Settings
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarItem {
  text: string;
  icon: React.ElementType;
  path: string;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  { text: 'Dashboard', icon: BarChart3, path: '/dashboard' },
  { text: 'Analysis', icon: TrendingUp, path: '/analysis' },
  { text: 'Campaigns', icon: Zap, path: '/campaigns' },
  { text: 'Broadcasts', icon: Radio, path: '/broadcasts' },
  { text: 'Transactional', icon: Send, path: '/transactional' },
  { text: 'Deliveries & Drifts', icon: Target, path: '/deliveries' },
  { text: 'People', icon: Users, path: '/people' },
  { text: 'Custom Objects', icon: BoxIcon, path: '/custom-objects' },
  { text: 'Segments', icon: Target, path: '/segments' },
  { text: 'Activity Logs', icon: Activity, path: '/activity-logs' },
  { text: 'Data & Integrations', icon: Database, path: '/data-integrations' },
  { text: 'Content', icon: FileText, path: '/content' },
  { text: 'Settings', icon: Settings, path: '/settings' }
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          bgcolor: 'white',
          borderRight: '1px solid #e2e8f0'
        },
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              bgcolor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            LU
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Level Up
          </Typography>
        </Box>
      </Box>

      <List sx={{ pt: 2 }}>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ px: 2 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: '#f1f5f9',
                  '& .MuiListItemIcon-root': {
                    color: '#6366f1'
                  },
                  '& .MuiListItemText-primary': {
                    color: '#6366f1',
                    fontWeight: 600
                  }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <item.icon size={20} />
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.875rem'
                }}
              />
              {item.badge && (
                <Chip 
                  label={item.badge} 
                  size="small" 
                  sx={{ height: 20, fontSize: '0.75rem' }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;