import React, { useEffect, useRef, useState } from "react";
import TeamHeader from "./TeamHeader/TeamHeader";
import teamData from "../../data/data.json";
import TeamInnerWrapper from "./TeamInnerWrapper/TeamInnerWrapper";
import TeamMembers from "./TeamMembers/TeamMembers";
import TeamMemberShowAll from "./TeamMemberShowAll/TeamMemberShowAll";
import TeamOuterWrapper from "./TeamOuterWrapper/TeamOuterWrapper";
import { NO_OF_ITEMS_TO_SHOW } from "../../constants/constant";
import { createUniqueIds, TeamMemberItemInterface } from "./utils/TeamUtils";

function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMemberItemInterface[]>([]);
  const firstRender = useRef(false);
  const [showAllItemsEnabled, setShowAllItemsEnabled] = useState(false);

  function handleAddItem(item: TeamMemberItemInterface) {
    setTeamMembers((prev: TeamMemberItemInterface[]) => {
      return [...prev, { ...item, _id: createUniqueIds() }];
    });
  }

  function handleRemoveItem(itemId: string) {
    setTeamMembers((prev: TeamMemberItemInterface[]) => {
      return prev.filter((item) => item._id !== itemId);
    });
  }

  function handleShowItem() {
    setShowAllItemsEnabled(true);
  }

  useEffect(() => {
    if (firstRender.current) {
      localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
      return;
    }
    if (!firstRender.current) {
      const retrievedItem = localStorage.getItem("teamMembers");
      if (!retrievedItem) {
        setTeamMembers([{ ...teamData[0], _id: createUniqueIds() }]);
      }
      retrievedItem && setTeamMembers([...JSON.parse(retrievedItem)]);
    }
    firstRender.current = true;
  }, [teamMembers]);

  useEffect(() => {
    teamMembers.length <= NO_OF_ITEMS_TO_SHOW &&
      showAllItemsEnabled &&
      setShowAllItemsEnabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMembers]);

  return (
    <>
      <TeamOuterWrapper>
        <TeamInnerWrapper>
          <TeamHeader></TeamHeader>
          <TeamMembers
            showAllItems={showAllItemsEnabled}
            handleRemoveItem={handleRemoveItem}
            teamMembers={teamMembers}
            handleAddition={handleAddItem}
          ></TeamMembers>
        </TeamInnerWrapper>
        {teamMembers.length > NO_OF_ITEMS_TO_SHOW && !showAllItemsEnabled && (
          <TeamMemberShowAll
            handleShowItem={handleShowItem}
          ></TeamMemberShowAll>
        )}
      </TeamOuterWrapper>
    </>
  );
}

export default Team;
