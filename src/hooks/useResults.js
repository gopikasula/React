import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchText) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchText,
          location: "arlington",
          limit: 30,
          radius: 40000,
        },
      });
      setSearchResults(response.data.businesses);
      setError("");
    } catch (error) {
      setError("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchResults, error, searchApi]
};
