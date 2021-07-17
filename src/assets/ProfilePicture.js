import ProfilePictureImage from "./images/avatar.png";

const ProfilePicture = ({ size }) => {
  return (
    <img
      src={ProfilePictureImage}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
};

export default ProfilePicture;
