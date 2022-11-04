import axios from "axios";

export const API =
  "https://pixabay.com/api/?key=30699323-ddbfd2b26472789bfe2202fa2&q=yellow+flowers&image_type=photo&pretty=true";

export const getApiData = async (url) => {
  const res = await axios.get(url);
};
