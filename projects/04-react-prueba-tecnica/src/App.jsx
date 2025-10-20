import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { use } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
// const CAT_IMAGE_URL = 'https://cataas.com';

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // useEffect([])
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const threefirstWords = fact.split(' ', 3).join(' ');

    fetch(`https://cataas.com/cat/says/${threefirstWords}?size=50&color=red`).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Image extracted using the first three words ${fact}`} />
      )}
    </main>
  );
}
