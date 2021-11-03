import { useEffect, useState } from "react";
import axios from "axios";
import { token } from "../constants/urls";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, [url]);

  const getData = () => {
    axios
      .get(url, {
        headers: {
          // auth: localStorage.getItem("token"),
          auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRyQ1B4eDk0VmViU0JhVGVQOW9hIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYzNTg2Mzk5OX0.WhzjkvddV-H3aWRWSdWnkEkMcYzPAbYTakvZTJ0WHqM",
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("an error has occurred, try again");
        // setError(error);
        setIsLoading(false);
      });
  };
  return [data, isLoading, getData];
};

export default useRequestData;
