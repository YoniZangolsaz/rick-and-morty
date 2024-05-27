import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styles } from "./style/dialogStyle";

type props = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const MyDialog = ({ children, open, onClose }: props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogContent sx={styles.dialog}>{children}</DialogContent>
    </Dialog>
  );
};

export default MyDialog;
