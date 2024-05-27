import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import rickAndMorty from "../images/rickAndMortyImg.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={rickAndMorty}
            alt="rick logo"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
          <Typography
            sx={{
              fontSize: "1.3rem",
              flexGrow: 1,
              ml: 2,
              textTransform: "uppercase",
            }}
          >
            rick and morty
          </Typography>
          <Tooltip title="sign out">
            <IconButton
              onClick={async () => {
                localStorage.clear();
                navigate("/");
              }}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
