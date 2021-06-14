import { useState } from "react";
import { storage } from "../../firebase";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [itemImage, setItemImage] = useState(null);

  const uploadImage = (e) => {
    e.preventDefault();
    storage
      .ref(`/products/${itemImage.name}`)
      .put(itemImage)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then((url) => {
        console.log(url);
      });
  };

  return (
    <div className={styles.createPost}>
      <div className={styles.createPostChild}>
        <h2>POST YOUR AD</h2>
        <form className={styles.createPostForm}>
          <h2>INCLUDE SOME DETAILS</h2>
          <div className={styles.formInputWrapper}>
            <p>Ad title</p>
            <input type="text" />
            <p>Mention the key features of your item</p>
          </div>
          <div className={styles.formInputWrapper}>
            <p>Description</p>
            <input type="text" />
            <p>Include condition, features and reason of selling</p>
          </div>
          <h2>SET A PRICE</h2>
          <div className={styles.formInputWrapper}>
            <p>Price</p>
            <input type="text" />
          </div>
          <h2>UPLOAD IMAGE</h2>
          <div className={styles.formInputWrapper}>
            {itemImage && (
              <img className={styles.productImage} src={itemImage} alt="" />
            )}
            <input
              onChange={(e) =>
                setItemImage(URL.createObjectURL(e.target.files[0]))
              }
              type="file"
            />
          </div>
          <div className={styles.formInputWrapper}>
            <button onClick={uploadImage}>Post now</button>
          </div>
        </form>
        <div className={styles.formContainer}></div>
      </div>
    </div>
  );
};

export default CreatePost;
