import styled from "styled-components";
import ReactDOM from "react-dom";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return ReactDOM.createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById("app-modal")!
  );
};

export default Modal;
