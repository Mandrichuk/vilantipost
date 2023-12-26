import React, {useState} from 'react';
import ChoiseInput from './ChoiseInput';
import {countries} from '../../constants/index';
import TextInput from './TextInput';

function PhoneInput(props) {
  const [chosenNumber, setChosenNumber] = useState(countries[0]);

  return (
    <div className={`flex flex-row`}>
      <ChoiseInput arr={countries} type={"number"}/>
      <TextInput type={"number"} />
    </div>
  );
}

export default PhoneInput;