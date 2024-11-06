import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.3,
      delay: 0.4,
    },
  },
};

export default function Modal({
  children,
  open,
  handleClose,
}: {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center"
          //   onClick={handleClose}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="absolute left-0 top-0 h-screen w-screen bg-black/60 backdrop-blur-sm "
            onClick={handleClose}
          />
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.7, ease: "backInOut" }}
            className="w-[460px] max-w-[90vw] rounded-xl bg-white relative z-[60] flex items-center justify-center p-8 pb-6 shadow-2xl"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
