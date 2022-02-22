import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  return (

    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo Nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>intagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>intagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>intagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </Container>
  );
}
fetch('http://localhost:3001/contacts')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('error', error);
  });

// SOP -> Same Origin Policy -> Politica de mesma origem - exclusivamente no navegador

// Origem: protocolo: //domínio: porta
// Saída: http://localhost:3000 - onde a requisição está chegando
// Destino: http://localhost:3000 - onde a requisição está chegando

// CORS -> Cross-Origin Resource Sharing -> compartilhamento de recursos entre origens cruzadas
