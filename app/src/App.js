import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`/api/message`)
        if (!response.ok) {
          throw new Error(`/api/message ${response.status} ${response.statusText}`)
        }
        setData(await response.text());
      } catch (error) {
        setData(error.message);
      }
    })();
  });

  return <div>[{data}]</div>;
}

export default App;
