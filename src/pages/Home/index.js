import { Link } from 'react-router-dom';
import {
 useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  Container, Header, ListHeader, Card, InputSearchContainer, ErrorContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
// import Modal from '../../components/Modal';

import ContactsService from '../../services/contactsService';
// import APIError from '../../errors/APIError';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const filteredContacts = useMemo(
  () => contacts.filter((contact) => (
        contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))),
        [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsloading(true);
      const constactsList = []; await ContactsService.listContacts(orderBy);
      setHasError(false);
      setContacts(constactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsloading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (

    <Container>
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
        <InputSearchContainer>
          <input value={searchTerm} type="text" placeholder="Pesquisar pelo Nome..." onChange={handleChangeSearchTerm} />
        </InputSearchContainer>
      )}

      <Header justifyContent={
          // eslint-disable-next-line no-nested-ternary
          hasError ? 'flex-end' : (contacts.length > 0 ? 'space-between' : 'center')
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {`${filteredContacts.length} `}
            {filteredContacts.length === 0 ? 'Contato' : 'Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar Novamete
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
        )}

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
        </>
      )}
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
