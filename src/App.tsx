'use client';

import fetchTime from './hooks/fetchTime';

const TimeClockComponent = () => {
  const {data,error,loading}=fetchTime()
  console.log(data)
  console.log(error)
  
  // useEffect(() => {
  //   fetchTimeClock();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No time clock data available.</div>;
  }


  return (
    <div>
      <h1>Time Clock Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TimeClockComponent;

