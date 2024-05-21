import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCenter } from './AdminPanel.styles';
import Modal from 'react-modal';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});

  // Funkcja do otwierania modalu edycji
  const openEditModal = (user) => {
    setSelectedUser(user);
    setUpdatedUserData({
      username: user.username,
      email: user.email,
      password: user.password,
    }); // Ustawienie danych użytkownika w stanie początkowym formularza edycji
    setModalIsOpen(true);
  };

  // Funkcja do zamykania modalu edycji
  const closeEditModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
    setUpdatedUserData({}); // Zresetowanie danych użytkownika po zamknięciu modalu
  };

  const handleEditUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/update/${selectedUser.id}`,
        {
          username: updatedUserData.username,
          email: updatedUserData.email,
          password: updatedUserData.password,
        }
      );
      // Aktualizacja danych użytkownika w lokalnym stanie
      setUsers(
        users.map((user) => {
          if (user.id === selectedUser.id) {
            return { ...user, ...updatedUserData };
          }
          return user;
        })
      );
      closeEditModal(); // Zamknięcie modalu po zakończeniu edycji
      alert(`User with id ${selectedUser.id} has been updated`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/delete/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert(`User with id ${id} has been deleted`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <StyledCenter>
      <h1>Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>isAdmin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.admin ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
                <button onClick={() => openEditModal(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={closeEditModal}>
        <h2>Edit User</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={updatedUserData.username || ''}
              onChange={(e) =>
                setUpdatedUserData({
                  ...updatedUserData,
                  username: e.target.value,
                })
              }
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={updatedUserData.email || ''}
              onChange={(e) =>
                setUpdatedUserData({
                  ...updatedUserData,
                  email: e.target.value,
                })
              }
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={updatedUserData.password || ''}
              onChange={(e) =>
                setUpdatedUserData({
                  ...updatedUserData,
                  password: e.target.value,
                })
              }
            />
          </label>
          <button type="button" onClick={handleEditUser}>
            Save
          </button>
          <button type="button" onClick={closeEditModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </StyledCenter>
  );
};

export default AdminPanel;
