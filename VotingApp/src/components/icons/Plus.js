import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
    {...props}>
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);
export default SvgPlus;
