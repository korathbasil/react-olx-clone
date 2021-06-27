import { useState, useRef } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";

import { db, storage } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./CreatePost.module.css";
import CategorySelector from "../CategorySelector/CategorySelector";
import AddPhotoIcon from "../../assets/AddPhotoIcon";
import { file } from "@babel/types";

const CreatePost = () => {
  const history = useHistory();
  const imagePicker = useRef();

  const [{ user }] = useGlobalStore();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productdetails, setProductDetails] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [dynamicInputs, setDynamicInputs] = useState({});
  const [images, setImages] = useState([]);
  const [itemImage, setItemImage] = useState(null);
  const [itemImageUrl, setItemImageUrl] = useState(null);

  const productDetailsStateModifier = (e) => {
    setProductDetails({
      ...productdetails,
      [e.target.name]: e.target.value,
    });
  };
  const dynamicinputModifier = (e) => {
    setDynamicInputs({
      ...dynamicInputs,
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
          ...dynamicInputs,
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

  const renderDynamicInputs = () => {
    const dynamicInputs = selectedCategory.attributes.map((item) => {
      if (item.type === "input") {
        return (
          <div className={styles.formInputWrapper}>
            <p>{item.name}</p>
            <input
              type="text"
              name={item.name}
              onChange={(e) => dynamicinputModifier(e)}
            />
            <p>Mention the key features of your item</p>
          </div>
        );
      } else if (item.type === "select")
        return (
          <div className={styles.formInputWrapper}>
            <p>{item.name}</p>
            <select
              type="text"
              name={item.name}
              onChange={(e) => dynamicinputModifier(e)}
            >
              {item.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <p>Mention the key features of your item</p>
          </div>
        );
    });
    return dynamicInputs;
  };

  const imagePickerHandler = (e) => {
    if (images.length <= 3) {
      const selectedImage = e.target.files[0];
      setImages((images) => setImages([...images, selectedImage]));
    }
    imagePicker.current.value = null;
  };

  return (
    <div className={styles.createPost}>
      <div className={styles.createPostChild}>
        <h2>POST YOUR AD</h2>
        {!selectedCategory && (
          <div className={styles.categoriesContainer}>
            <h2>CHOOOSE A CATEGORY</h2>
            <CategorySelector setSelectedCategory={setSelectedCategory} />
          </div>
        )}
        {selectedCategory && (
          <form className={styles.createPostForm}>
            {/* <div className={styles.formHeader}></div> */}
            <div className={styles.formDetailsInput}>
              <h2>INCLUDE SOME DETAILS</h2>
              {renderDynamicInputs()}
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
            </div>
            <div className={styles.formPriceInput}>
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
            </div>
            <div className={styles.formImagesInput}>
              <h2>UPLOAD UPTO 4 PHOTOS</h2>

              <div className={styles.formInputWrapper}>
                <div className={styles.photosContainer}>
                  <div
                    className={styles.singlePhoto}
                    onClick={() => imagePicker.current.click()}
                  >
                    {images && images[0] ? (
                      <img src={URL.createObjectURL(images[0])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <div className={styles.singlePhoto}>
                    {images && images[1] ? (
                      <img src={URL.createObjectURL(images[1])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <div className={styles.singlePhoto}>
                    {images && images[2] ? (
                      <img src={URL.createObjectURL(images[2])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <div className={styles.singlePhoto}>
                    {images && images[3] ? (
                      <img src={URL.createObjectURL(images[3])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <input
                    type="file"
                    name=""
                    id=""
                    hidden
                    ref={imagePicker}
                    onChange={imagePickerHandler}
                  />
                </div>
                {itemImage && (
                  <img
                    className={styles.productImage}
                    src={itemImageUrl}
                    alt=""
                  />
                )}
                <input
                  onChange={(e) => {
                    setItemImageUrl(URL.createObjectURL(e.target.files[0]));
                    setItemImage(e.target.files[0]);
                  }}
                  type="file"
                />
              </div>
            </div>
            <div className={styles.formSubmit}>
              <button onClick={uploadImage}>Post now</button>
            </div>
          </form>
        )}
        <div className={styles.formContainer}></div>
      </div>
    </div>
  );
};

export default CreatePost;
