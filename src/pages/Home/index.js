import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

import ContactsService from '../../services/contactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsloading] = useState(true);

  const filteredContacts = useMemo(
  () => contacts.filter((contact) => (
        contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))),
        [contacts, searchTerm],
  );

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsloading(true);
        const constactsList = await ContactsService.listContacts(orderBy);

        setContacts(constactsList);
      } catch (error) {
          console.log('error', error);
      } finally {
        setIsloading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (

    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input value={searchTerm} type="text" placeholder="Pesquisar pelo Nome..." onChange={handleChangeSearchTerm} />
      </InputSearchContainer>

      <Header>
        <strong>
          {`${filteredContacts.length} `}
          {filteredContacts.length === 0 ? 'Contato' : 'Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        {filteredContacts.length > 0 && (
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
        )}
      </ListHeader>

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

// SOP -> Same Origin Policy -> Politica de mesma origem - exclusivamente no navegador

// Origem: protocolo: //domínio: porta
// Saída: http://localhost:3000 - onde a requisição está chegando
// Destino: http://localhost:3000 - onde a requisição está chegando

// CORS -> Cross-Origin Resource Sharing -> compartilhamento de recursos entre origens cruzadas

// Simple Request

// Preflight request -> vai mandar uma request option antes da requisição para verificar os heads
