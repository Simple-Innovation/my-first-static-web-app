import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const text = await (await fetch(`/api/message`)).text();
        setData(text);
      } catch (error) {
        setData(error.message);
      }
    })();
  });

  return <div>{data}</div>;
}

export default App;
