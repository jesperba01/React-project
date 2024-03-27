import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
`;

console.log("9");

const ColorChangingBackground = () => {
  console.log("11");
  const colors = [
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]
  ];

  const [colorIndices, setColorIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndices(prevIndices => {
        const newIndex1 = (prevIndices[0] + 1) % colors.length;
        const newIndex2 = (prevIndices[1] + 1) % colors.length;
        return [newIndex1, newIndex2];
      });
    }, 10);

    return () => clearInterval(interval);
  }, [colors.length]);

  const [color1, color2] = colorIndices.map(index => {
    const [r, g, b] = colors[index];
    return `rgb(${r}, ${g}, ${b})`;
  });

  return <GradientBackground color1={color1} color2={color2} />;
};

export default ColorChangingBackground;