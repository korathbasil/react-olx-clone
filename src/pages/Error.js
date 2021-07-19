import { Link } from "react-router-dom";

import NoAdsImage from "../assets/images/no-ads-image.png";
import MiniHeader from "../components/MiniHeader/MiniHeader";
import Footer from "../components/Footer/Footer";

const Error = () => {
  return (
    <>
      <MiniHeader />
      <div className="errorPageContents">
        <img src={NoAdsImage} alt="" />
        <p>Page Not Found(404)</p>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
      <Footer />
      <style>{`
        .errorPageContents {
          width: 100%;
          min-height: calc(100vh - 265px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 100px;
        }
        .errorPageContents > img {
          width: 150px;
        }
        .errorPageContents > p {
          font-size: 16px;
          font-weight: 800;
          margin: 20px 0;
          color: var(--black);
        }
        .errorPageContents > a > button {
          height: 40px;
          width: 100px;
          border-radius: 3px;
          border: none;
          background-color: var(--black);
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }
        .errorPageContents > a > button:hover {
          border: 5px solid var(--black);
          background-color: white;
          color: var(--black);
        }
      `}</style>
    </>
  );
};

export default Error;
