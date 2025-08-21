import { useState, useEffect } from "react";

const fetchTime = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchTimeClock = async () => {
    setLoading(true);
    try {
      const NEXT_PUBLIC_API_URL = "http://192.168.29.100:9009";

      const response = await fetch(
        `${NEXT_PUBLIC_API_URL}/core/time-clock/user/682c2522c2f4fea12a75a63e`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODZmNTQ1NzFmOTc0ZWM2NzdkNmMzZmUiLCJlbWFpbCI6ImFtYW5kZWVwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6ImFtYW4iLCJsYXN0TmFtZSI6ImRlZXAiLCJwcm92aWRlciI6ImVtYWlsIiwiaWF0IjoxNzU1NjY5Mjk5LCJleHAiOjE3NTU3NTU2OTl9.y1IWY5Vy8YF_VQ60M_Hv-qGEfp6VayOzeX70A0zK-x0`,
          },
        }
      );

      const json = await response.json();
      setData(json.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimeClock();
  }, []);

  return { data, loading, error , fetchTimeClock};
};

export default fetchTime;
