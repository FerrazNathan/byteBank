import React from 'react';
import { render, screen } from '@testing-library/react'
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
  })
})