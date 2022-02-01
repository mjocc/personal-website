import { useState } from 'react';

const HeaderLetter = ({ character, animationType = 'rubberBand' }) => {
  const [pulsing, setPulsing] = useState(false);
  return character !== ' ' ? (
    <span
      className={`inline-block ${
        pulsing ? `animate__animated animate__${animationType}` : ''
      }`}
      onMouseEnter={() => setPulsing(true)}
      onAnimationEnd={() => setPulsing(false)}
    >
      {character}
    </span>
  ) : (
    <span>{character}</span>
  );
};

const HeaderText = ({ className = '', children: text }) => (
  <h1 className={`font-heading text-8xl ${className}`}>
    {[...text].map((character, index) => (
      <HeaderLetter
        key={index}
        character={character}
        animationType="rubberBand"
      />
    ))}
  </h1>
);

export default HeaderText;
