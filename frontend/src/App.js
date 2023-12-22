import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      const json = await response.json();
      setData(json);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className={`bg-red-800`}>
      hello
      {data.members}
    </div>
  );
}

export default App;