import React from "react";
import styles from "./TeamInnerWrapper.module.css";

interface TeamInnerWrapperProps {
  children: React.ReactNode;
}

function TeamInnerWrapper({ children }: TeamInnerWrapperProps) {
  return <div className={styles.team_wrapper}>{children}</div>;
}

export default TeamInnerWrapper;
