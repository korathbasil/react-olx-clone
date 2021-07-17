import { useEffect, useState } from "react";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

import truncateString from "../../utils/truncateString";

import styles from "./Ad.module.css";

const Ad = ({ ad }) => {
  // console.log(ad[ad.attributes.featuredAttributes[0]]);
  const [date, setDate] = useState();
  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.ad}>
      <div className={styles.adTop}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>
      <div className={styles.adBottom}>
        <h3>₹ {ad.price}</h3>
        <p>
          {ad.attributes[ad.featuredAttributes[0]]} -{" "}
          {ad.attributes[ad.featuredAttributes[1]]}
        </p>
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
