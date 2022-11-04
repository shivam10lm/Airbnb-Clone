import axios from "axios";

export const BASE_URL = "https://airbnb19.p.rapidapi.com/api/v1";

const options = {
  headers: {
    //"X-RapidAPI-Key": "708b81dbd5mshad536dc7add99fep1f6167jsn49e641a2f743",
    "X-RapidAPI-Key": "8c377ffc4bmsh9a40a9bb513a1e2p15058bjsn18fe0ae98204",
    "X-RapidAPI-Host": "airbnb19.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
