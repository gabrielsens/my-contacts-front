import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O formato do Email é inválido"
      >
        <Input type="text" placeholder="E-mail" error />
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
