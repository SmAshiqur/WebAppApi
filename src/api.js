import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AxCfQipZOnOrpRVQyiF15cR34a9fhJoNK6EndNQkRSs",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
