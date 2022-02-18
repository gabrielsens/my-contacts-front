import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './styles';
import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo Modal</h1>
        <p>Corpo Modal</p>

        <Footer>
          <button type="button" className="cancelButton">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};