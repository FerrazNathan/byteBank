import React from "react";
import { render } from "@testing-library/react";
import Conta from "./Conta"

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