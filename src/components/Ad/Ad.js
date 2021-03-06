import { useEffect, useState } from "react";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

import truncateString from "../../utils/truncateString";

import styles from "./Ad.module.css";

const Ad = ({ ad }) => {
  const [date, setDate] = useState();
  const [featuredAttributes, setFeaturedAttributes] = useState(null);
  useEffect(() => {
    getFeaturedAttributes();
    formatDate();
  });

  function formatDate() {
    const createdAt = new Date(ad.createdAt.seconds * 1000);
    const dateDistance = formatDistance(createdAt, new Date(), {
      addSuffix: true,
    });
    if (
      parseInt(dateDistance.split(" ")[0]) < 10 &&
      dateDistance.split(" ")[1] === "days"
    )
      setDate(dateDistance);
    else if (dateDistance.split(" ")[1] === "years") {
      setDate(format(createdAt, "MMMM dd yy"));
    } else {
      setDate(format(createdAt, "MMMM dd"));
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
        <p>{truncateString(ad.title, 35)}</p>
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
