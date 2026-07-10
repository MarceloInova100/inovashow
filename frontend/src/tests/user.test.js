import { render, screen, fireEvent } from '@testing-library/react';
import UserView from '../views/UserView';
import * as userController from '../controllers/userController';

test('renderiza lista de usuários e adiciona novo', async () => {
  jest.spyOn(userController, 'fetchUsers').mockResolvedValue([
    { id: 1, name: 'Marcelo' }
  ]);
  jest.spyOn(userController, 'addUser').mockResolvedValue({ id: 2, name: 'Ana' });

  render(<UserView />);

  const user1 = await screen.findByText('Marcelo');
  expect(user1).toBeInTheDocument();

  const addButton = screen.getByText('Criar');
  fireEvent.click(addButton);

  const user2 = await screen.findByText('Ana');
  expect(user2).toBeInTheDocument();
});
