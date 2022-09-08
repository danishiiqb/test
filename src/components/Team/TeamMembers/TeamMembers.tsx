import { useEffect, useState } from "react";

import TeamMemberItem from "../TeamMemberItem/TeamMemberItem";
import TeamMemberItemAddition from "../TeamMemberItemAddition/TeamMemberItemAddition";
import styles from "./TeamMember.module.css";
import TeamMemberAddBlock from "../TeamMemberAddBlock/TeamMemberAddBlock";
import { NO_OF_ITEMS_TO_SHOW } from "../../../constants/constant";
import { TeamMemberItemInterface } from "../utils/TeamUtils";

interface TeamMemberProps {
  teamMembers: TeamMemberItemInterface[];
  handleAddition: (item: TeamMemberItemInterface) => void;
  handleRemoveItem: (itemId: string) => void;
  showAllItems: boolean;
}

function TeamMembers({
  teamMembers,
  handleAddition,
  handleRemoveItem,
  showAllItems,
}: TeamMemberProps) {
  const [showAddBlock, setShowAddBlock] = useState(false);

  function handleToggleAddBlock() {
    setShowAddBlock((prev) => {
      return !prev;
    });
  }

  useEffect(() => {
    showAddBlock && handleToggleAddBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMembers]);

  return (
    <>
      <div className={styles.list_container}>
        <div className={styles.list_add_contain}>
          {!showAddBlock ? (
            <TeamMemberItemAddition
              toggleAddBlock={handleToggleAddBlock}
            ></TeamMemberItemAddition>
          ) : (
            <TeamMemberAddBlock
              handleAddItem={handleAddition}
            ></TeamMemberAddBlock>
          )}
        </div>

        {teamMembers
          .slice(0, showAllItems ? teamMembers.length : NO_OF_ITEMS_TO_SHOW)
          .map(({ username, role, picture, _id }: TeamMemberItemInterface) => {
            return (
              <TeamMemberItem
                role={role}
                picture={picture}
                key={_id}
                id={_id}
                userName={username}
                isRemovalAllowed={teamMembers.length > 1}
                handleRemoveItem={handleRemoveItem}
              ></TeamMemberItem>
            );
          })}
      </div>
    </>
  );
}

export default TeamMembers;
