import { useState } from "react";
import { useHistory } from "react-router-dom";
import { db, storage } from "../../firebase";
import styles from "./CreatePost.module.css";
import useGlobalStore from "../../store/GlobalStore";

const CreatePost = () => {
  const history = useHistory();
  const [{ user }] = useGlobalStore();
  const [productdetails, setProductDetails] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [itemImage, setItemImage] = useState(null);
  const [itemImageUrl, setItemImageUrl] = useState(null);

  const productDetailsStateModifier = (e) => {
    setProductDetails({
      ...productdetails,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = (e) => {
    e.preventDefault();
    storage
      .ref(`/products/${itemImage.name}`)
      .put(itemImage)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then((url) => {
        return db.collection("products").add({
          title: productdetails.title,
          description: productdetails.description,
          imageUrl: url,
          price: parseInt(productdetails.price),
          createdAt: new Date().toDateString(),
          userId: user.uid,
        });
      })
      .then(() => {
        history.push("/");
      });
    console.log(productdetails);
  };

  return (
    <div className={styles.createPost}>
      <div className={styles.createPostChild}>
        <h2>POST YOUR AD</h2>
        <form className={styles.createPostForm}>
          <h2>INCLUDE SOME DETAILS</h2>
          <div className={styles.formInputWrapper}>
            <p>Ad title</p>
            <input
              type="text"
              name="title"
              value={productdetails.title}
              onChange={(e) => productDetailsStateModifier(e)}
            />
            <p>Mention the key features of your item</p>
          </div>
          <div className={styles.formInputWrapper}>
            <p>Description</p>
            <input
              type="text"
              name="description"
              value={productdetails.description}
              onChange={(e) => productDetailsStateModifier(e)}
            />
            <p>Include condition, features and reason of selling</p>
          </div>
          <h2>SET A PRICE</h2>
          <div className={styles.formInputWrapper}>
            <p>Price</p>
            <input
              type="number"
              name="price"
              value={productdetails.price}
              onChange={(e) => productDetailsStateModifier(e)}
            />
          </div>
          <h2>UPLOAD IMAGE</h2>
          <div className={styles.formInputWrapper}>
            {itemImage && (
              <img className={styles.productImage} src={itemImageUrl} alt="" />
            )}
            <input
              onChange={(e) => {
                setItemImageUrl(URL.createObjectURL(e.target.files[0]));
                setItemImage(e.target.files[0]);
              }}
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
