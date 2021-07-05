import ProfilePictureImage from "./images/profile-picture.webp";

const ProfilePicture = ({ size }) => {
  return (
    <img
      src={ProfilePictureImage}
      style={{ width: size, height: size, objectFit: "cover" }}
      alt="profile Picture"
    />
  );
};

export default ProfilePicture;
