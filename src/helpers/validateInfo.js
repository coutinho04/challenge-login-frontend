export default function validateInfo(values) {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Digite um e-mail válido;';
  }

  if (values.password.trim() === '') {
    errors.password = 'Digite a senha;';
  }

  return errors;
}
