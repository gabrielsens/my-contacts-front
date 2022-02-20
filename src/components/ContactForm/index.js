import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
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
  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value);
  }

  // Two way databinding

  return (
    <Form>
      <button type="button" onClick={handleClick}>
        Loga Email inpit
      </button>
      <FormGroup>
        <Input
          type="text"
          value={name}
          placeholder="Nome"
          onChange={(event) => { console.log('digitou'); return setName(event.target.value); }}
          onFocus={() => console.log('entrou no input')}
          onBlur={() => console.log('saiu do input')}
        />
      </FormGroup>

      <FormGroup
        error="O formato do Email é inválido"
      >
        <Input
          type="text"
          defaultValue="gabriel@hotmail.com"
          placeholder="E-mail"
          ref={emailInput}
          onChange={(event) => console.log('Digitou', event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option>123</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          { buttonLabel }
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
