import { useState } from "react";

import { categories } from "../../categories";
import styles from "./CategorySelector.module.css";
import Arrow from "../../assets/Arrow";

const CategorySelector = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const activeMenuHandler = (name, subs) => {
    if (activeMenu?.name === name) {
      return setActiveMenu(null);
    }
    setActiveMenu({
      name: name,
      subs: subs,
    });
  };

  return (
    <div className={styles.categories}>
      <div className={styles.left}>
        {categories.map(({ name, Icon, subs }) => {
          return (
            <div
              className={styles.category}
              onClick={() => activeMenuHandler(name, subs)}
            >
              <div>
                {Icon && <Icon />}
                <p>{name}</p>
              </div>
              <div className={styles.arrowContainer}>
                <Arrow />
              </div>
              {activeMenu?.name === name && (
                <div className={styles.subCategoryContainer}>
                  {subs.map((item) => {
                    return (
                      <div className={styles.subCategory}>
                        <p>{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
