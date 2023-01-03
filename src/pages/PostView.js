import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import View from "../components/View";

const PostView = ({ postData, userData }) => {
  const { id } = useParams();
  const data = postData[id - 1];

  const [today, setToday] = useState([]);
  useEffect(() => {
    if (data) {
      const newDate = data.created.replace(/\./g, "-");
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      const formatDate = new Date(newDate)
        .toLocaleDateString("en-US", options)
        .split(" ");
      let newToday = [];
      newToday.push(formatDate[1].slice(0, 3));
      formatDate[2].length < 2
        ? newToday.push("0" + formatDate[2])
        : newToday.push(formatDate[2]);
      newToday.push(formatDate[0].replace(",", ""));
      setToday(newToday);
    }
  }, [data]);

  return (
    <>
      <View userData={userData} post={data}></View>
    </>
  );
};

export default React.memo(PostView);
