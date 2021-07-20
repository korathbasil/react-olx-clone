import ProfilePictureImage from "./images/avatar.png";

const ProfilePicture = ({ size }) => {
  return (
    <img
      src={ProfilePictureImage}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "cover",
      }}
      alt=""
    />
  );
};

export default ProfilePicture;
