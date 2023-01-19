import NiceModal from "@ebay/nice-modal-react";
import { PageA } from "./PageA";

export function PageAContainer() {
  return (
    <NiceModal.Provider>
      <PageA />
    </NiceModal.Provider>
  );
}
