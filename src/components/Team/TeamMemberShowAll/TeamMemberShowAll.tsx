import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./TeamMemberShowAll.module.css";

interface TeamMemberShowAllProps {
  handleShowItem: () => void;
}

function TeamMemberShowAll({ handleShowItem }: TeamMemberShowAllProps) {
  return (
    <button onClick={handleShowItem} className={styles.button}>
      <div>Show All</div>
      <IoIosArrowDown></IoIosArrowDown>
    </button>
  );
}

export default TeamMemberShowAll;
