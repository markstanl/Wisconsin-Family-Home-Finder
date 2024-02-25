import React, { useState, useEffect } from "react";
import axios from "axios";

const HandleJson = ({ rankingArray, setFinalCity }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://your-flask-server/api/data", {
          user_employability: rankingArray[1],
          user_safety: rankingArray[2],
          user_quality: rankingArray[0],
          user_budget: rankingArray[3],
        });
        setFinalCity(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once, equivalent to componentDidMount
};

export default HandleJson;
