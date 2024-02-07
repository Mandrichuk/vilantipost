import React from 'react';
import { MdMessage } from "react-icons/md";
import useWindowWidth from '../../utils/useWindowWidth';

function ContactUsButton() {
  const windowWidth = useWindowWidth();


  return (
    <div className={`contactUsButton h-[60px] w-[60px] fixed ${windowWidth > 700 ? "bottom-6 right-6" : "bottom-4 right-4"} bg-custom-color-900 z-[999] text-white rounded-lg`}>
      <MdMessage className={`w-full h-full p-3`}/>
    </div>
  );
}

export default ContactUsButton;