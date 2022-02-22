/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

// Controlled Components -> são campos onde a responsabilidade de controlar o
// valor é do react gerenciar os campos
// Uncontrolled components -> não é do react, é da dom
// qunado quiser acessar precisa ir na dom pegar o input para acessar o valor

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();
  const isFormValid = errors.length === 0 && name;
  // const emailInput = useRef(null);

  // function handleClick() {
  //   console.log(emailInput.current.value);
  // }

  // Two way databinding
  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrgatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Digite um email válido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
  //   console.log({
  //   name, email, phone, category,
  // });
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          type="text"
          value={name}
          placeholder="Nome *"
          onChange={handleNameChange}
          // onFocus={() => console.log('entrou no input')}
          // onBlur={() => console.log('saiu do input')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          // defaultValue="gabriel@hotmail.com"
          placeholder="E-mail"
          // ref={emailInput}
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          maxLength={15}
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discordy">Discordy</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          { buttonLabel }
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
