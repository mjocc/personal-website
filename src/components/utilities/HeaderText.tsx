import { FC, useState } from 'react';

interface HeaderLetter {
  character: string;
  animationType?: string;
}

const HeaderLetter: FC<HeaderLetter> = ({
  character,
  animationType = 'rubberBand',
}) => {
  const [pulsing, setPulsing] = useState(false);
  return character !== ' ' ? (
    <span
      className={`inline-block transition-colors duration-500 ${
        pulsing
          ? `animate__animated animate__${animationType} text-emerald-500`
          : ''
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

interface HeaderTextProps {
  text: string;
  className?: string;
}

const HeaderText: FC<HeaderTextProps> = ({ className = '', text }) => (
  <h1 className={`font-heading text-8xl ${className}`}>
    {[...text].map((character, index) => (
      <HeaderLetter key={index} character={character} />
    ))}
  </h1>
);

export default HeaderText;
