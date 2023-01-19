import NiceModal, { muiDialogV5 } from "@ebay/nice-modal-react";
import { MyDialog } from "./MyDialog";

export function PageB({ text }) {
  const modal = NiceModal.useModal(MyDialog);
  return (
    <button onClick={() => modal.show()}>Click here, it don't works</button>
  );
}
