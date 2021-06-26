import { categories } from "../../categories";
import styles from "./CategorySelector.module.css";
import Arrow from "../../assets/Arrow";

const CategorySelector = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.left}>
        {categories.map(({ name, Icon }) => {
          return (
            <div className={styles.category}>
              <div>
                {Icon && <Icon />}
                <p>{name}</p>
              </div>
              <div className={styles.arrowContainer}>
                <Arrow />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
