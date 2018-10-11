import React from 'react';

export default function Headline({ title, tagline }) {
  return(
    <div className="headline">
      <h1>{ title }</h1>
      <h6>{ tagline }</h6>
    </div>
  );
}
