import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UserService from './users';

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.name]: e.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await UserService.login({
        email: values.email,
        password: values.password,
      });

      if (user === 'Válido') {
        Swal.fire({
          title: 'Sucess!',
          text: 'Login realizado com sucesso.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else if (user === 'Inválido') {
        Swal.fire({
          title: 'Error!',
          text: 'E-mail ou senha inválida.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      setErrors(error);
    }

    setErrors(validate(values));
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
