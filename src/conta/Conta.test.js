import React from "react";
import { render, screen } from "@testing-library/react";
import Conta from "./Conta"

describe('Quando eu renderizo o Componente de conta', () => {

  it('Exibir o saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000} />)

    const saldo = screen.getByTestId('saldo-conta')

    expect(saldo.textContent).toBe('R$ 1000')
  })
})

describe('Quando eu renderizo o Componente de conta', () => {
  
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(
      <Conta
        transacao='deposito'
        valor='20.00'
        data='19/08/20221'
      />
    )
  
    expect(container.firstChild).toMatchSnapshot()
  })
})