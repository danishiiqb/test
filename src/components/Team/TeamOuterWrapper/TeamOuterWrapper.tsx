import React from "react";
import styles from "./TeamOuterWrapper.module.css";

interface TeamWrapperProps {
  children: React.ReactNode;
}

function TeamOuterWrapper({ children }: TeamWrapperProps) {
  return <div className={styles.team_wrapper}>{children}</div>;
}

export default TeamOuterWrapper;
