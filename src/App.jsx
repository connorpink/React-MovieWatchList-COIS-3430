import { useState } from 'react'

import './App.css'

function App() {

  async function get(request) {
    try {
      const response = await fetch(request);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // create a fetch request with a method, url, and body
  const request1 = new Request("https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  });

  get(request1);


  return (
    <>

    </>
  )
}

export default App
