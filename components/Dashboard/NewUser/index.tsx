import styles from "../../../styles/Dashboard.module.css";
import CenterBar from "./centerBar";

const NewUserPage = () => {
  return (
    <div className={`${styles.main} grid grid-cols-[850px_1fr] gap-1`}>
      <CenterBar />
    </div>
  );
};
// This is the tab for a brand new user with no loan, transactions, profile pic or doc uploads
export default NewUserPage;
