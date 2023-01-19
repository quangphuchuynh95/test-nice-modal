import NiceModal, { muiDialogV5 } from "@ebay/nice-modal-react";
import { MyDialog } from "../MyDialog";

export function PageA() {
  const modal = NiceModal.useModal(MyDialog);
  return <button onClick={() => modal.show()}>Click here, it works</button>;
}
