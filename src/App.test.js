import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App'

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
})