import ProfilePictureImage from "./images/profile-picture.webp";

const ProfilePicture = ({ size }) => {
  return (
    <img
      src={ProfilePictureImage}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
};

export default ProfilePicture;
