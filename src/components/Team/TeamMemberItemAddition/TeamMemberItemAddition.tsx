import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TeamButton from "../TeamButton/TeamButton";
import styles from "./TeamMemberItemAddition.module.css";

interface TeamMemberItemAdditionProps {
  toggleAddBlock: () => void;
}

function TeamMemberItemAddition({
  toggleAddBlock,
}: TeamMemberItemAdditionProps) {
  return (
    <div className={styles.item_addition_container}>
      <div className={styles.button_block}>
        <TeamButton
          handleClick={toggleAddBlock}
          icon={<AiOutlinePlus fill="#459C96" />}
        ></TeamButton>
      </div>
      <div>
        Add Team Member <br /> to this test
      </div>
    </div>
  );
}

export default TeamMemberItemAddition;
