import { useEffect } from "react";

import MinimalHeader from "../../Components/MinimalHeader/MinimalHeader";
import CreatePost from "../../Components/CreatePost/CreatePost";

import useGlobalStore from "../../store/GlobalStore";

const Sell = () => {
  return (
    <>
      <MinimalHeader />
      <CreatePost />
    </>
  );
};

export default Sell;
