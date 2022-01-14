import React from 'react';
import { render } from '@testing-library/react'
import Transacao from './Transacao';

describe('Componente de transação do extrato', () => {

  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(
      <Transacao
        data="19/08/2021"
        tipo="saque"
        valor="50.00"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})