import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`/api/message`)
      const { text } = response.ok ? await response.json() : await response.text();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
