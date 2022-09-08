import React, { useEffect, useRef, useState } from "react";
import styles from "./TeamMemberAddBlock.module.css";
import data from "../../../data/data.json";
import TeamMemberAddBlockItem from "../TeamMemberAddBlockItem/TeamMemberAddBlockItem";
import TeamMemberNotFound from "../TeamMemberNotFound/TeamMemberNotFound";
import { TeamMemberItemInterface } from "../utils/TeamUtils";
import { AiOutlinePlus } from "react-icons/ai";

interface TeamMemberAddBlockProps {
  handleAddItem: (item: TeamMemberItemInterface) => void;
}

function TeamMemberAddBlock({ handleAddItem }: TeamMemberAddBlockProps) {
  const listData = useRef(data).current;
  const [filteredItem, setFilteredItem] = useState<TeamMemberItemInterface[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (inputValue) {
      let filteredList = listData.filter((item: TeamMemberItemInterface) => {
        return item.username.toLowerCase().includes(inputValue.toLowerCase());
      });

      if (filteredList.length === 0) {
        setIsNotFound(true);
        return;
      }
      setFilteredItem([...filteredList]);
    }
    if (filteredItem.length > 0 && !inputValue) {
      setFilteredItem([]);
    }
    isNotFound && setIsNotFound(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleClearInput() {
    setInputValue("");
  }

  return (
    <div className={styles.add_block_container}>
      <div className={styles.input_container}>
        <input
          onChange={handleChange}
          value={inputValue}
          className={styles.add_input}
          type="text"
          placeholder="Search"
        />
        {inputValue && (
          <div onClick={handleClearInput} className={styles.input_icon}>
            <AiOutlinePlus fill="#FFAF89" />
          </div>
        )}
      </div>

      <div>
        {isNotFound ? (
          <TeamMemberNotFound></TeamMemberNotFound>
        ) : (
          (filteredItem.length ? filteredItem : listData).map(
            (item: TeamMemberItemInterface) => {
              return (
                <TeamMemberAddBlockItem
                  key={item.id}
                  handleAddItem={handleAddItem}
                  item={item}
                ></TeamMemberAddBlockItem>
              );
            }
          )
        )}
      </div>
    </div>
  );
}

export default TeamMemberAddBlock;
