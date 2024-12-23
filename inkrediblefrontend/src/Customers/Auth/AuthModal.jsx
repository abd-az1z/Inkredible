import { Box, Modal } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#E5E0DA",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const AuthModal = ({ open, handleClose }) => {
  const location = useLocation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Render form based on the route */}
        {location.pathname === "/register" ? <RegisterForm /> : <LoginForm />}
      </Box>
    </Modal>
  );
};

export default AuthModal;