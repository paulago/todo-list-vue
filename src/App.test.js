/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/vue'
import App from './App.vue'
import userEvent from '@testing-library/user-event' // esta biblioteca se utiliza para simular eventos de usuario, como escribir texto en un input o hacer clic en un botón.
import { describe, expect, test } from 'vitest'

describe('App', () => {
  test('should add a new todo when the user adds a todo', async () => {
    render(App)

    // screen se utiliza para buscar elementos en la pantalla.
    expect(screen.queryByText('Hola')).toBeNull();

    await userEvent.type(screen.getByPlaceholderText('Write your task...'), 'Hola')
    await userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('Hola')).toBeDefined();

    expect(screen.queryByText('Caracola')).toBeNull();

    await userEvent.type(screen.getByPlaceholderText('Write your task...'), 'Caracola')
    await userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText('Caracola')).toBeDefined();

  })

  test('should delete a todo when the user clicks on the X button', async () => {
    await userEvent.click(screen.getAllByRole('button', { name: 'X' })[0]);
    expect(screen.getByText('Caracola')).toBeDefined();
    expect(screen.queryByText('Hola')).toBeNull();
  })


})
