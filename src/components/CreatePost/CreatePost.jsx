import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { db, storage, fieldValue } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./CreatePost.module.css";
import CategorySelector from "../CategorySelector/CategorySelector";
import AddPhotoIcon from "../../assets/AddPhotoIcon";

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
  const [address, setAddress] = useState({
    State: "",
    City: "",
    Neighbourhood: "",
  });
  const [images, setImages] = useState([]);

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
  const addressModifier = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImagesAndPostDetails = (e) => {
    e.preventDefault();
    const uploadImage = (image) => {
      return storage
        .ref(`/posts/${image.name}`)
        .put(image)
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        });
    };
    Promise.all(images.map((image) => uploadImage(image)))
      .then((urls) => {
        return db.collection("posts").add({
          category: selectedCategory.category,
          subCategory: selectedCategory.subcategory,
          featuredAttributes: selectedCategory.featuredAttributes,
          title: productdetails.title,
          description: productdetails.description,
          imageUrl: urls,
          price: parseInt(productdetails.price),
          createdAt: Date.now(),
          userId: user.id,
          address: {
            ...address,
          },
          attributes: {
            ...dynamicInputs,
          },
        });
      })
      .then(() => {
        history.push("/");
      });
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
          <form
            className={styles.createPostForm}
            onSubmit={uploadImagesAndPostDetails}
          >
            <div className={styles.formDetailsInput}>
              <h2>INCLUDE SOME DETAILS</h2>
              {selectedCategory.attributes.map((item) => {
                if (item.type === "input") {
                  return (
                    <div className={styles.formInputWrapper}>
                      <p>{item.name}</p>
                      <input
                        type="text"
                        name={item.name}
                        onChange={(e) => dynamicinputModifier(e)}
                        required
                      />
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
                        required
                      >
                        <option></option>
                        {item.options.map((option) => (
                          <option value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  );
                else if (item.type === "radio")
                  return (
                    <div className={styles.formInputWrapper}>
                      <p>{item.name}</p>
                      <div className={styles.radioButtonsWrapper}>
                        {item.options.map((option) => (
                          <div
                            style={{
                              backgroundColor:
                                dynamicInputs &&
                                dynamicInputs[item.name] === option
                                  ? "skyblue"
                                  : "",
                            }}
                            onClick={() => {
                              const selectedInput = document.getElementById(
                                `${item.name}${option}`
                              );
                              selectedInput.click();
                            }}
                          >
                            <input
                              type="radio"
                              id={`${item.name}${option}`}
                              name={item.name}
                              value={option}
                              onChange={dynamicinputModifier}
                              hidden
                              required
                            />
                            <p>{option}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                else return;
              })}
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
                  required
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
                  required
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
                  <div
                    className={styles.singlePhoto}
                    onClick={() => imagePicker.current.click()}
                  >
                    {images && images[1] ? (
                      <img src={URL.createObjectURL(images[1])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <div
                    className={styles.singlePhoto}
                    onClick={() => imagePicker.current.click()}
                  >
                    {images && images[2] ? (
                      <img src={URL.createObjectURL(images[2])} alt="" />
                    ) : (
                      <AddPhotoIcon />
                    )}
                  </div>
                  <div
                    className={styles.singlePhoto}
                    onClick={() => imagePicker.current.click()}
                  >
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
              </div>
            </div>
            <div className={styles.formLocationInput}>
              <h2>ENTER YOUR LOCATION</h2>
              <div className={styles.formInputWrapper}>
                <p>State</p>
                <input
                  type="text"
                  name="State"
                  value={address.State}
                  onChange={addressModifier}
                />
              </div>
              <div className={styles.formInputWrapper}>
                <p>City</p>
                <input
                  type="text"
                  name="City"
                  value={address.City}
                  onChange={addressModifier}
                />
              </div>
              <div className={styles.formInputWrapper}>
                <p>Neighbourhood</p>
                <input
                  type="text"
                  name="Neighbourhood"
                  value={address.Neighbourhood}
                  onChange={addressModifier}
                />
              </div>
            </div>
            <div className={styles.formSubmit}>
              <button>Post now</button>
            </div>
          </form>
        )}
        <div className={styles.formContainer}></div>
      </div>
    </div>
  );
};

export default CreatePost;
