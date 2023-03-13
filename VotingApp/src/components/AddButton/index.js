import { TouchableOpacity} from 'react-native';
import React from 'react';
import SvgPlus from '../icons/Plus';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SvgPlus size="10" color="blue" />
    </TouchableOpacity>
  );
};

export default AddButton;
