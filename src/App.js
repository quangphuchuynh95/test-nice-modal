import "./styles.css";
import { useState } from "react";
import { Dialog } from "@mui/material";
import NiceModal, {
  muiDialog,
  useModal,
  muiDialogV5,
  antdModal,
  antdModalV5,
  antdDrawer,
  antdDrawerV5,
  bootstrapDialog
} from "@ebay/nice-modal-react";

import { PageAContainer } from "./PageA/PageAContainer";
import { PageB } from "./PageB";

export default function App() {
  const [page, setPage] = useState("a");
  return (
    <div className="App">
      <button onClick={() => setPage("b")}>Click here to go to page B</button>
      {page === "a" && <PageAContainer />}
      {page === "b" && <PageB />}
    </div>
  );
}
