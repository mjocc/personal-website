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
  textSize?: string;
}

const HeaderText: FC<HeaderTextProps> = ({ text, className = '', textSize = 'text-8xl' }) => (
  <h1 className={`font-heading ${textSize} ${className}`}>
    {[...text].map((character, index) => (
      <HeaderLetter key={index} character={character} />
    ))}
  </h1>
);

export default HeaderText;
