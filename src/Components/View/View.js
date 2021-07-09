import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";

import styles from "./View.module.css";
import Arrow from "../../assets/Arrow";

function View() {
  const { adId } = useParams();
  const [ad, setAd] = useState(null);
  const [postDetails, setPostDetails] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const [userDetails, setUserDeatils] = useState({});

  useEffect(() => {
    db.collection("posts")
      .doc(adId)
      .get()
      .then((doc) => {
        setAd(doc.data());
        setPostDetails(Object.entries(doc.data().attributes));
        setSelectedImage(doc.data().imageUrl[0]);
        return doc.data().userId;
      })
      .then((id) => {
        console.log(id);
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

  return (
    <div className={styles.viewParentDiv}>
      <div className={styles.viewChildDiv}>
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
            <p>2016 - 96 KM</p>
            <p>{ad?.title}</p>
            <div className={styles.productInfoBottom}>
              <p>India</p>
              <p>Jun 11</p>
            </div>
          </div>
          <div className={styles.sellerInfo}>
            <p>Seller description</p>
            <div>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprestigeportraits.com%2Fwp-content%2Fthemes%2Fprestige%2Fassets%2Fbuild%2Fimages%2Fgalleries%2Fgallery-2%2Fgallery-image-3.jpg&f=1&nofb=1"
                alt=""
              />
              <div className={styles.sellerInfoContainer}>
                <h3>{userDetails?.displayName}</h3>
                <p>Member since 2019</p>
              </div>
              <div className={styles.arrowContainer}>
                <Arrow />
              </div>
            </div>
            <button>Chat with Seller</button>
            <button>Make an Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default View;
