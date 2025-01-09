import styled from "styled-components";
import PropTypes from "prop-types";

Modal.propTypes = {
  modal: PropTypes.array,
  closemodal: PropTypes.node,
  responce: PropTypes.string,
  topic: PropTypes.string
}

export default function Modal({ modal, closemodal, responce, topic }) {
  return (
    <Overlay modal={modal}>
      <ModalContainer modal={modal}>
        <ModalHeader>
          <label>{topic}</label>
          <ButtomClose onClick={() => { closemodal(false) }}>
            <i className="fa fa-close" />
          </ButtomClose>
        </ModalHeader>
        <ModalBody>
          <p>
            {responce}
          </p>
        </ModalBody>
        <ModalFooter>
          <ButtomSucces onClick={() => { closemodal(false) }}>
            Aceptar
          </ButtomSucces>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  transition:all 0.5s ease-in-out;
  backdrop-filter: ${({ modal }) => (modal ? "blur(10px)" : "none")};
  display: flex;
  z-index:${({ modal }) => (modal ? "212" : "-1")};
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
width:800px;
min-height:100px;
transition:all 0.5s ease-in-out;
background:white;
position:fixed;
border-radius:10px;
box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 0px;
padding:20px;
background:rgb(18, 18, 18);
box-shadow: 3px 5px 10px red;
transform: scale(${({ modal }) => (modal ? "100%" : "0%")});

@media only screen and (max-width:860px){
  width:90%;
  margin:60px;
  min-height:auto;
}
`;
const ModalHeader = styled.div`
margin-bottom:14px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom: solid 2px red;
gap:15px;
label{
  font-weight:900;
  color:red;
  margin:10px 0;
  font-size:20px;
}
@media only screen and (max-width:560px){
  label{
    font-size:17px;
  }
}
`;
const ButtomClose = styled.div`
color:red;
font-weight:900;
font-size:22px;
@media only screen and (max-width:850px){
display:none;
}
`;
const ModalBody = styled.div`
font-weight:700;
color:white
`;
const ModalFooter = styled.div`
border-top: solid 2px red;
`;
const ButtomSucces = styled.button`
padding: 5px 30px;
margin-top:20px;
background:linear-gradient(to right,red,yellow);
border:none;
color:white;
font-size:18px;
font-weight:700;
border-radius:30px;
transition: all 0.3s ease-in-out;
:active{
  transform:scale(96%);
}
`;
