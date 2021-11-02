import React from "react";
import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { gotToPost } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // gotToPost(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
