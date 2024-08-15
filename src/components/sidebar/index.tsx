// src/components/Sidebar.tsx
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
import { ButtonEdit } from "../button/index.tsx";
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

const Sidebar: React.FC<SidebarProps> = ({
  checkedCall,
  onChangeCall,
}: any) => {
  const [, , desktopView] = useBreakpoint();
  const [expand, setExpand] = useState(false);

  return (
    <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
      <Box
        display="flex"
        flexDirection="column"
        // flexDirection={desktopView ? "column" : "row"}
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection={desktopView ? "column" : "row"}
            alignItems="center"
            maxWidth="100%"
          >
            <img
              src={mineAvatar}
              alt="mineAvatar"
              style={{
                width: desktopView ? "55%" : "25%",
                height: desktopView ? "60%" : "auto",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {Bio.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {Bio.roles[0]}
              </Typography>
            </Box>
          </Box>
            <DarkLight checked={checkedCall} onChange={onChangeCall} />
        </Box>
        {!desktopView && (
          <Box>
            <Button onClick={() => setExpand(!expand)} variant="text">
              {expand ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_96761)">
                    <path
                      d="M12 10.828L7.04999 15.778L5.63599 14.364L12 8L18.364 14.364L16.95 15.778L12 10.828Z"
                      fill="#8c8c8c"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_96761">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_96469)">
                    <path
                      d="M12 13.172L16.95 8.22205L18.364 9.63605L12 16L5.63599 9.63605L7.04999 8.22205L12 13.172Z"
                      fill="#8c8c8c"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_96469">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </Button>
          </Box>
        )}
      </Box>
      {desktopView && (
        <Box>
          <List>
            <ListItem component="a" href="#about">
              <ButtonEdit name="About" />
            </ListItem>
            <ListItem component="a" href="#experience">
              <ButtonEdit name="Experience" />
            </ListItem>
            <ListItem component="a" href="#projects">
              <ButtonEdit name="Projects" />
            </ListItem>
            <ListItem component="a" href="#contact">
              <ButtonEdit name="Contact" />
            </ListItem>
          </List>
        </Box>
      )}
      {(desktopView || expand) && (
        <>
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={Bio.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={Bio.phone} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={Bio.location} />
            </ListItem>
          </List>

          <Box display="flex" justifyContent="center">
            <Tooltip title="GitHub">
              <Button
                href={Bio.github}
                size="small"
                variant="text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_94425)">
                    <path
                      d="M5.88298 18.653C5.58298 18.453 5.32498 18.198 5.02298 17.837C4.86622 17.6452 4.71089 17.4522 4.55698 17.258C4.09398 16.683 3.80198 16.418 3.49998 16.309C3.25028 16.2194 3.04641 16.0342 2.93324 15.7943C2.82006 15.5543 2.80684 15.2792 2.89648 15.0295C2.98612 14.7798 3.17129 14.576 3.41124 14.4628C3.65119 14.3496 3.92628 14.3364 4.17598 14.426C4.92798 14.696 5.43698 15.161 6.12298 16.014C6.02898 15.897 6.46298 16.441 6.55598 16.553C6.74598 16.78 6.88598 16.918 6.99598 16.991C7.19998 17.128 7.58298 17.187 8.14598 17.131C8.16898 16.749 8.23998 16.378 8.34798 16.036C5.37998 15.31 3.69998 13.396 3.69998 9.64002C3.69998 8.40002 4.06998 7.28402 4.75798 6.34802C4.53998 5.45402 4.57298 4.37302 5.05998 3.15602C5.11525 3.01836 5.20045 2.89471 5.30942 2.79405C5.41838 2.69339 5.54838 2.61823 5.68998 2.57402C5.77098 2.55002 5.81698 2.53902 5.89798 2.52702C6.70098 2.40402 7.83498 2.69702 9.31298 3.62302C10.1938 3.41711 11.0954 3.31375 12 3.31502C12.912 3.31502 13.818 3.41902 14.684 3.62302C16.161 2.69002 17.297 2.39702 18.106 2.52702C18.191 2.54002 18.263 2.55702 18.324 2.57702C18.4628 2.6228 18.5899 2.69846 18.6963 2.79867C18.8028 2.89887 18.8859 3.0212 18.94 3.15702C19.427 4.37302 19.46 5.45402 19.242 6.34702C19.933 7.28302 20.3 8.39202 20.3 9.64002C20.3 13.397 18.626 15.305 15.658 16.032C15.783 16.447 15.848 16.911 15.848 17.412C15.8481 18.3174 15.8441 19.2227 15.836 20.128C16.0606 20.177 16.2614 20.3019 16.4047 20.4816C16.548 20.6613 16.625 20.8849 16.6228 21.1147C16.6206 21.3446 16.5392 21.5667 16.3925 21.7436C16.2457 21.9205 16.0425 22.0414 15.817 22.086C14.678 22.314 13.834 21.554 13.834 20.561L13.836 20.115L13.841 19.41C13.846 18.702 13.848 18.072 13.848 17.412C13.848 16.715 13.665 16.26 13.423 16.052C12.762 15.482 13.097 14.397 13.963 14.3C16.93 13.967 18.3 12.818 18.3 9.64002C18.3 8.68502 17.988 7.89602 17.387 7.23602C17.2604 7.09727 17.1754 6.92565 17.1418 6.74083C17.1082 6.55602 17.1273 6.36547 17.197 6.19102C17.363 5.77702 17.434 5.23402 17.293 4.57702L17.283 4.58002C16.792 4.71902 16.173 5.02002 15.425 5.52902C15.3044 5.61088 15.1673 5.66537 15.0234 5.68869C14.8795 5.71201 14.7323 5.70359 14.592 5.66402C13.7479 5.43031 12.8758 5.31289 12 5.31502C11.11 5.31502 10.228 5.43402 9.40798 5.66502C9.2682 5.70428 9.12155 5.71263 8.97821 5.68949C8.83488 5.66635 8.69831 5.61227 8.57798 5.53102C7.82598 5.02402 7.20398 4.72402 6.70998 4.58402C6.56598 5.23702 6.63698 5.77802 6.80198 6.19102C6.87179 6.36538 6.89108 6.55587 6.85766 6.74068C6.82423 6.9255 6.73944 7.09716 6.61298 7.23602C6.01598 7.89002 5.69998 8.69402 5.69998 9.64002C5.69998 12.812 7.07098 13.968 10.022 14.3C10.887 14.397 11.223 15.477 10.566 16.048C10.374 16.216 10.137 16.78 10.137 17.412V20.562C10.137 21.548 9.30198 22.287 8.17698 22.09C7.94875 22.0499 7.74151 21.9319 7.5907 21.7559C7.43988 21.58 7.35484 21.3572 7.35012 21.1255C7.3454 20.8938 7.42128 20.6677 7.5648 20.4857C7.70832 20.3038 7.91057 20.1774 8.13698 20.128V19.138C7.22698 19.199 6.47498 19.05 5.88298 18.653Z"
                      fill="#8c8c8c"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_94425">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </Tooltip>
            <Tooltip title="Resume">
              <Button
                href={Bio.resume}
                size="small"
                variant="text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_96357)">
                    <path
                      d="M10 6V8H5V19H16V14H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"
                      fill="#8c8c8c"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_96357">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Button
                href={Bio.linkedin}
                size="small"
                variant="text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_94225)">
                    <path
                      d="M12 9.55C12.917 8.613 14.111 8 15.5 8C16.9587 8 18.3576 8.57946 19.3891 9.61091C20.4205 10.6424 21 12.0413 21 13.5V21H19V13.5C19 12.5717 18.6313 11.6815 17.9749 11.0251C17.3185 10.3687 16.4283 10 15.5 10C14.5717 10 13.6815 10.3687 13.0251 11.0251C12.3687 11.6815 12 12.5717 12 13.5V21H10V8.5H12V9.55ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM4 8.5H6V21H4V8.5Z"
                      fill="#8c8c8c"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_94225">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </Tooltip>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Sidebar;
