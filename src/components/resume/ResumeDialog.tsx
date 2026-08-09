import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";

interface ResumeDialogProps {
  open: boolean;
  onClose: () => void;
  /** Which of the two resumes to show first. */
  initialId?: string;
}

/** Hide the built-in PDF chrome so the preview blends into the panel. */
const viewerParams = "#toolbar=0&navpanes=0&scrollbar=0&view=FitH";

const ResumeDialog: React.FC<ResumeDialogProps> = ({ open, onClose, initialId }) => {
  const { resumes } = usePortfolioData();
  const list = resumes.data;
  const [activeId, setActiveId] = useState(initialId ?? list[0]?.id);

  useEffect(() => {
    if (open) setActiveId(initialId ?? list[0]?.id);
  }, [open, initialId, list]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const active = list.find((item) => item.id === activeId) ?? list[0];

  if (!active) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="resume-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="resume-dialog__backdrop"
            aria-label="Close resume preview"
            onClick={onClose}
          />

          <motion.div
            className="resume-dialog__panel"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="resume-dialog__header">
              <div>
                <p className="resume-dialog__eyebrow">Resume</p>
                <h2 id="resume-dialog-title" className="resume-dialog__title">
                  Two versions, same 3.7 years
                </h2>
              </div>
              <button
                type="button"
                className="resume-dialog__close"
                onClick={onClose}
                aria-label="Close"
              >
                <CloseRoundedIcon sx={{ fontSize: 20 }} />
              </button>
            </div>

            <div className="resume-dialog__tabs" role="tablist" aria-label="Resume version">
              {list.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === active.id}
                  className={`resume-tab ${item.id === active.id ? "active" : ""}`.trim()}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className="resume-dialog__summary">{active.summary}</p>

            <div className="resume-dialog__viewer">
              <iframe
                key={active.id}
                src={`${active.file}${viewerParams}`}
                title={`${active.label} resume preview`}
                loading="lazy"
              />
            </div>

            <div className="resume-dialog__fallback">
              <PictureAsPdfOutlinedIcon sx={{ fontSize: 26 }} />
              <p>Inline preview isn’t supported here — open or download the PDF instead.</p>
            </div>

            <div className="resume-dialog__actions">
              <a href={active.file} download={active.downloadName} className="btn btn--primary">
                <DownloadRoundedIcon sx={{ fontSize: 17 }} />
                Download PDF
              </a>
              <a
                href={active.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Open in new tab
                <OpenInNewRoundedIcon sx={{ fontSize: 15 }} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeDialog;
