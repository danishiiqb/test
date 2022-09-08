import React from "react";
import styles from "./TeamButton.module.css";

interface TeamButtonProps {
  icon: React.ReactNode;
  handleClick?: () => void;
}

function TeamButton({ icon, handleClick }: TeamButtonProps) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {icon}
    </button>
  );
}

export default TeamButton;
