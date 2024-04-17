import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Badge, Button, Chip, Stack, useMediaQuery, useTheme } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none", color: "black" }}>
        <Toolbar sx={{ p: 1, height: "4rem", display: "flex", justifyContent: "space-around" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ECOMMERCE SHOP
          </Typography>
          <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"} columnGap={2}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="username" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>
                <Typography color="black" sx={{ textDecoration: "none" }} textAlign="center">
                  Add new Product
                </Typography>
              </MenuItem>
            </Menu>
            <Typography variant="h6" fontWeight={300}>
              User Info
            </Typography>
            <Button variant="contained">Admin</Button>
            <Stack sx={{ flexDirection: "row", columnGap: "1rem", alignItems: "center", justifyContent: "center" }}>
              <Badge badgeContent={1} color="red">
                <IconButton>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Badge>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
