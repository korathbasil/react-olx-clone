import { useEffect } from "react";

import MinimalHeader from "../../components/MinimalHeader/MinimalHeader";
import CreatePost from "../../components/CreatePost/CreatePost";
import MiniFooter from "../../components/MiniFooter/MiniFooter";

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
