import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Form from '../Form/index';
import Button from '../Button';
import Content from '../Field/Content';
import Input from '../Field/Input';

const FormNew = () => {
  const schema = yup.object({
    email: yup.string().email().required('Esse campo é obrigatório'),

    password: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>Usuario</Content>
      <Input type="email" name="email" {...register('email')} />
      <Content>Senha</Content>
      <Input type="password" name="password" {...register('password')} />

      <Button>Iniciar sessão</Button>
    </Form>
  );
};

export default FormNew;
