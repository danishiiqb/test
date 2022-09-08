import { AiOutlinePlus } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import TeamButton from "../TeamButton/TeamButton";
import styles from "./TeamMemberItem.module.css";

interface TeamMemberItemProps {
  id?: string ;
  role: string;
  userName: string;
  picture: string;
  handleRemoveItem: (itemId: string) => void;
  isRemovalAllowed: boolean;
}

function TeamMemberItem({
  id,
  role,
  userName,
  picture,
  isRemovalAllowed,
  handleRemoveItem,
}: TeamMemberItemProps) {
  const includes = ["External", "Internal"];
  return (
    <div className={styles.item_container}>
      <div className={styles.item_img_block}>
        <img src={`./assets/${picture}`} alt="Avatar" />
        {isRemovalAllowed && (
          <div className={styles.item_btn}>
            <div className={styles.tooltip}>
              <div className={styles.tooltip_inner}>Remove User</div>
            </div>
            <TeamButton
              handleClick={() => isRemovalAllowed && handleRemoveItem((id as string))}
              icon={<AiOutlinePlus fill="#FFAF89" />}
            ></TeamButton>
          </div>
        )}
      </div>
      <div className={styles.item_info_block}>
        <div className={styles.item_info_title}>
          <div>{includes.includes(role) ? `${role} Member` : role}</div>
          {role === "External" && <IoMdStar fill="#FF9429"></IoMdStar>}
        </div>
        <div className={styles.item_info_name}>{userName}</div>
      </div>
    </div>
  );
}

export default TeamMemberItem;
