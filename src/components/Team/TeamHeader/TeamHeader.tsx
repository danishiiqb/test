import { HiOutlineUserGroup } from "react-icons/hi";
import styles from "./TeamHeader.module.css";

function TeamHeader() {
  return (
    <div className={styles.team_header}>
      <div className={styles.team_header_heading}>Your Team for this Test</div>
      <button className={styles.team_header_button}>
        <div className={styles.team_header_text}>Team Page</div>
        <HiOutlineUserGroup></HiOutlineUserGroup>
      </button>
    </div>
  );
}

export default TeamHeader;
