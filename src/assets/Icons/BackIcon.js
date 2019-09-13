import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../colors';

function BackIcon({
  width = 17,
  height = 17,
  darkShade = colors.darkBlue,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 408 408">
      <G>
        <G id="arrow-back">
          <Path
            fill={darkShade}
            d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z"
          />
        </G>
      </G>
    </Svg>
  );
}

export default BackIcon;
