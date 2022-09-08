import { TeamMemberItemInterface } from "../utils/TeamUtils";
import styles from "./TeamMemberAddBlockItem.module.css";

interface TeamMemberAddBlockItemProps {
  item: TeamMemberItemInterface;
  handleAddItem: (item: TeamMemberItemInterface) => void;
}

function TeamMemberAddBlockItem({
  item,
  handleAddItem,
}: TeamMemberAddBlockItemProps) {
  return (
    <div
      onClick={() => {
        handleAddItem(item);
      }}
      className={styles.item}
    >
      <div className={styles.item_img_box}>
        <img src={`./assets/${item.picture}`} alt="" />
      </div>
      <div className={styles.item_username}>{item.username}</div>
    </div>
  );
}

export default TeamMemberAddBlockItem;
