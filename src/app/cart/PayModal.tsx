import { Button } from "@/Components/Button/Button";
import Modal from "@/Components/Modal/Modal";
import React from "react";

export default function PayModal({
  open,
  onClose,
}: {
  open: number | string | null;
  onClose: () => void;
}) {
  return <Modal open={Boolean(open)} handleClose={onClose}>
    <div className="py-2 w-full flex flex-col gap-y-3">
        <h4 className="text-lg font-semibold text-primary">
            Pay {open} With Stripe.
        </h4>
        <Button colors="primary" fullWidth onClick={onClose}>Pay</Button>
    </div>
  </Modal>;
}
