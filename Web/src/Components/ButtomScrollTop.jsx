import { useState } from "react";
import { BiChevronUp } from 'react-icons/bi'
import { PositionButtom } from "./Style/style";

export default function ButtonScrollTop() {

  const [ButtomState, SetButtomState] = useState(false);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 635) {
      SetButtomState(true)
    } else {
      SetButtomState(false)
    }
  })

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <PositionButtom top={ButtomState} onClick={ScrollTop}>
      <div className="buttom-top">
        <BiChevronUp className="icon-buttom-top" />
      </div>
    </PositionButtom>
  )
}