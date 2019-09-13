import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';
import colors from '../colors';

function BathTubIcon({
  width = 60,
  height = 60,
  darkShade = colors.darkBlue,
  lightShade = colors.themeBlue,
}) {
  return (
    <Svg height={height} viewBox="0 0 192 192" width={width}>
      <Path fill={lightShade} d="m24 96v-40a8 8 0 0 1 16 0v16h16v-16a24 24 0 0 0 -48 0v40h-8v16h192v-16z" />
      <Circle cx="144" cy="64" r="8" />
      <Circle cx="120" cy="48" r="8" />
      <Circle cx="104" cy="80" r="8" />
      <Path fill={darkShade} d="m8 144a40.045 40.045 0 0 0 40 40v8h16v-8h64v8h16v-8a40.045 40.045 0 0 0 40-40v-24h-176z" />
    </Svg>
  );
}

export default BathTubIcon;
