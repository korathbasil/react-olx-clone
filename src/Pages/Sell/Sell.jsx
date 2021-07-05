import { useEffect } from "react";

import MinimalHeader from "../../Components/MinimalHeader/MinimalHeader";
import CreatePost from "../../Components/CreatePost/CreatePost";
import MiniFooter from "../../Components/MiniFooter/MiniFooter";

import useGlobalStore from "../../store/GlobalStore";

const Sell = () => {
  return (
    <>
      <MinimalHeader />
      <CreatePost />
      <MiniFooter />
    </>
  );
};

export default Sell;
