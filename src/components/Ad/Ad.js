import { useEffect, useState } from "react";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

import truncateString from "../../utils/truncateString";

import styles from "./Ad.module.css";

const Ad = ({ ad }) => {
  // console.log(ad[ad.attributes.featuredAttributes[0]]);
  const [date, setDate] = useState();
  const [featuredAttributes, setFeaturedAttributes] = useState(null);
  useEffect(() => {
    formatDate();
    getFeaturedAttributes();
  }, []);

  function formatDate() {
    const dateDistance = formatDistance(new Date(ad.createdAt), new Date(), {
      addSuffix: true,
    });
    if (
      parseInt(dateDistance.split(" ")[0]) < 10 &&
      dateDistance.split(" ")[1] === "days"
    )
      setDate(dateDistance);
    else if (dateDistance.split(" ")[1] === "years") {
      setDate(format(new Date(ad.createdAt), "MMMM dd yy"));
    } else {
      setDate(format(new Date(ad.createdAt), "MMMM dd"));
    }
  }

  function getFeaturedAttributes() {
    if (ad.featuredAttributes) {
      const attributes = ad.featuredAttributes.map((attribute) => {
        const value = ad.attributes[attribute.name];
        return value + " " + attribute.unit;
      });
      setFeaturedAttributes(attributes.join(" - "));
    }
  }

  return (
    <div className={styles.ad}>
      <div className={styles.adTop}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>
      <div className={styles.adBottom}>
        <h3>₹ {ad.price}</h3>
        {featuredAttributes && <p>{featuredAttributes}</p>}
        <p>{truncateString(ad.title, 25)}</p>
        <div>
          <p>
            {ad.address.City} {ad.address.State}
          </p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
