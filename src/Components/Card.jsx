import React from 'react';

export default function Card({ url, index }) {
  return (
    <>
      <img src={url} alt={`${index}`} />
    </>
  );
}
