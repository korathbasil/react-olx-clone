import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

import { db } from "../../firebase";

import styles from "./View.module.css";
import Menu from "../../components/Menu/Menu";
import ProfilePicture from "../../assets/ProfilePicture";
import Arrow from "../../assets/Arrow";

function View() {
  const { adId } = useParams();
  const [ad, setAd] = useState(null);
  const [postDetails, setPostDetails] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const [userDetails, setUserDeatils] = useState({});

  const [featuredAttributes, setFeaturedAttributes] = useState(null);
  const [date, setDate] = useState();

  useEffect(() => {
    db.collection("posts")
      .doc(adId)
      .get()
      .then((doc) => {
        setAd(doc.data());
        setPostDetails(Object.entries(doc.data().attributes));
        setSelectedImage(doc.data().imageUrl[0]);
        getFeaturedAttributes(doc.data());
        formatDate(doc.data());
        return doc.data().userId;
      })
      .then((id) => {
        db.collection("users")
          .doc(id)
          .get()
          .then((doc) => {
            setUserDeatils({
              id: doc.id,
              ...doc.data(),
            });
          });
      });
  }, []);

  function formatDate(ad) {
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

  function getFeaturedAttributes(ad) {
    if (ad.featuredAttributes) {
      const attributes = ad.featuredAttributes.map((attribute) => {
        const value = ad.attributes[attribute.name];
        return value + " " + attribute.unit;
      });
      setFeaturedAttributes(attributes.join(" - "));
    }
  }

  return (
    <div className={styles.viewParentDiv}>
      <Menu />
      <div className={styles.viewChildDiv}>
        <p>
          Home / {ad?.category} / {ad?.subCategory}
        </p>
        <div>
          <div className={styles.left}>
            <div className={styles.imageView}>
              <div className={styles.imageViewTop}>
                {selectedImage && <img src={selectedImage} alt="" />}
              </div>
              <div className={styles.imageSelector}>
                {ad?.imageUrl.map((image) => (
                  <img
                    src={image}
                    style={{
                      border:
                        selectedImage === image
                          ? "2px solid var(--black)"
                          : "none",
                    }}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.infoContainer}>
              <h3>Details</h3>
              <div className={styles.detailsContainer}>
                {postDetails?.map((attribute) => {
                  return (
                    <div className={styles.property}>
                      <p>{attribute[0]}</p>
                      <p>{attribute[1]}</p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <h3>Description</h3>
              <p>{ad?.description}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.productInfo}>
              <div className={styles.productInfoTop}>
                <h3>₹ {ad?.price}</h3>
                <div></div>
              </div>
              {featuredAttributes && <p>{featuredAttributes}</p>}
              <p>{ad?.title}</p>
              <div className={styles.productInfoBottom}>
                <p>
                  {ad?.address.City} {ad?.address.State}
                </p>
                <p>{date}</p>
              </div>
            </div>
            <div className={styles.sellerInfo}>
              <p>Seller description</p>
              <div>
                <Link to={`/profile/${userDetails?.id}`}>
                  {(userDetails?.profilePicture === "" ||
                    userDetails?.profilePicture == null) && (
                    <ProfilePicture size={60} />
                  )}
                  {userDetails?.profilePicture && (
                    <img src={userDetails?.profilePicture} alt="" />
                  )}
                </Link>
                <div className={styles.sellerInfoContainer}>
                  <Link to={`/profile/${userDetails?.id}`}>
                    <h3>{userDetails?.displayName}</h3>
                  </Link>
                  <p>
                    Member since{" "}
                    {userDetails && (
                      <span>{format(new Date(), "MMMM dd yyyy")}</span>
                    )}
                  </p>
                </div>
                <Link to={`/profile/${userDetails?.id}`}></Link>
                <div className={styles.arrowContainer}>
                  <Arrow />
                </div>
                <Link to={`/profile/${userDetails?.id}`}></Link>
              </div>
              <button>Chat with Seller</button>
              <button>Make an Offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default View;
