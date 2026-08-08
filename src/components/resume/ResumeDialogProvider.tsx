import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import ResumeDialog from "./ResumeDialog.tsx";

interface ResumeDialogValue {
  /** Pass a resume id to preselect one of the two versions. */
  openResume: (id?: string) => void;
  closeResume: () => void;
}

const ResumeDialogContext = createContext<ResumeDialogValue | null>(null);

export const ResumeDialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [initialId, setInitialId] = useState<string | undefined>();

  const openResume = useCallback((id?: string) => {
    setInitialId(id);
    setOpen(true);
  }, []);

  const closeResume = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openResume, closeResume }), [openResume, closeResume]);

  return (
    <ResumeDialogContext.Provider value={value}>
      {children}
      <ResumeDialog open={open} onClose={closeResume} initialId={initialId} />
    </ResumeDialogContext.Provider>
  );
};

export const useResumeDialog = (): ResumeDialogValue => {
  const context = useContext(ResumeDialogContext);
  if (!context) {
    throw new Error("useResumeDialog must be used inside a ResumeDialogProvider");
  }
  return context;
};
