import NiceModal, { muiDialogV5 } from "@ebay/nice-modal-react";
import { Dialog } from "@mui/material";

export const MyDialog = NiceModal.create(() => {
  const modal = NiceModal.useModal();
  return <Dialog {...muiDialogV5(modal)}>Dialog content</Dialog>;
});
