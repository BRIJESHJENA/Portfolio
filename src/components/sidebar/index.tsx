import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  Button,
  Tooltip,
} from "@mui/material";
import { Bio } from "../../data/contents.ts";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DarkLight } from "../darkLight/index.tsx";
import useBreakpoint from "../../assets/breakpoints/index.tsx";
import mineAvatar from "../../assets/images/mine-avatar.png";

interface SidebarProps {
  checkedCall: boolean;
  onChangeCall: () => void;
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Sidebar: React.FC<SidebarProps> = ({ checkedCall, onChangeCall }) => {
    // const [, , desktopView] = useBreakpoint();
  const [, , desktopView, , bp] = useBreakpoint();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const showNav = bp.sideLayout;
  const showDetails = bp.sideLayout || detailsOpen;

  return (
    <Paper elevation={0} className="sidebar-brutal app-sidebar" sx={{

      maxHeight: desktopView ? "calc(100vh - 2rem)" : "auto"}}>
      <Box className="sidebar-header">
        <Box className="sidebar-theme-toggle">
          <DarkLight checked={checkedCall} onChange={onChangeCall} />
        </Box>

        <Box className="sidebar-profile">
          <Box
            className="avatar-brutal"
            sx={{
              width: { xs: 80, sm: 88, md: 92, xl: 100 },
              height: { xs: 80, sm: 88, md: 92, xl: 100 },
            }}
          >
            <img src={mineAvatar} alt={Bio.name} />
          </Box>
          <Typography className="sidebar-name">{Bio.name}</Typography>
          <Typography className="sidebar-role">{Bio.roles[0]}</Typography>
        </Box>

        {bp.mobile && (
          <Box className="sidebar-mobile-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="retro-nav-pill retro-nav-pill--compact">
                {link.label}
              </a>
            ))}
          </Box>
        )}

        {bp.mobile && (
          <Button
            className="sidebar-details-toggle"
            onClick={() => setDetailsOpen(!detailsOpen)}
            fullWidth
            size="small"
          >
            {detailsOpen ? "Hide contact ▲" : "Contact & links ▼"}
          </Button>
        )}
      </Box>

      {showNav && !bp.mobile && (
        <Box className="sidebar-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="retro-nav-pill">
              {link.label}
            </a>
          ))}
        </Box>
      )}

      {showDetails && (
        <Box className="sidebar-details">
          <List dense disablePadding className="sidebar-contact-list">
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={Bio.email}
                primaryTypographyProps={{ fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.3 }}
              />
            </ListItem>
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={Bio.phone}
                primaryTypographyProps={{ fontSize: "0.75rem", fontWeight: 600 }}
              />
            </ListItem>
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <LocationOnIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={Bio.location}
                primaryTypographyProps={{ fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.3 }}
              />
            </ListItem>
          </List>

          <Box className="sidebar-social">
            {[
              { title: "GitHub", href: Bio.github },
              { title: "Resume", href: Bio.resume },
              { title: "LinkedIn", href: Bio.linkedin },
            ].map((social) => (
              <Tooltip key={social.title} title={social.title}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-chip brutal-chip--compact"
                >
                  {social.title}
                </a>
              </Tooltip>
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default Sidebar;
