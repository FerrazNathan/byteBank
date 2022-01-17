import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App, { calcularNovoSaldo }from './App'

describe('Componente principal', () => {
  describe('Quando eu abro o App do Banco', () => {

    it('o nome do banco deve ser exibido', () => {
      render(<App />);

      expect(screen.getByText('ByteBank')).toBeInTheDocument()
    })
    it('o saldo deve ser exibido', () => {
      render(<App />)

      expect(screen.getByText('Saldo:')).toBeInTheDocument()
    })
    it('o botão de transação deve ser exibido', () => {
      render(<App />)

      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
    })
  })
  describe('Quando eu realizo uma transação', () => {

    it('que é um saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50,
      }

      const novoSaldo = calcularNovoSaldo(valores, 150)

      expect(novoSaldo).toBe(100)
    })
    it('que é um saque, a transação deve ser realizada', () => {
      render(<App/>)

      const saldo = screen.getByText('R$ 1000')
      const transacao = screen.getByLabelText('Saque')
      const valor = screen.getByTestId('valor')
      const botaoTransacao = screen.getByText('Realizar operação')
      //nova forma de escrever esse mesmo teste
      // const {
      //   getByText,
      //   getByTestId,
      //   getByLabelText
      // } = render(<App />)

      // const saldo = getByText('R$ 1000')
      // const transacao = getByLabelText('Saque')
      // const valor = getByTestId('valor')
      // const botaoTransacao = getByText('Realizar operação')

      expect(saldo.textContent).toBe('R$ 1000')

      fireEvent.click(transacao, { target: { value: 'Saque'}})
      fireEvent.change(valor, {target: { value: 100 }})
      fireEvent.click(botaoTransacao)

      expect(saldo.textContent).toBe('R$ 900')
    })
  })
})