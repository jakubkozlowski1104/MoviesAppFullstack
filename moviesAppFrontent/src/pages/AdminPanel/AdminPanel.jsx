import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCenter } from './AdminPanel.styles';
import Modal from 'react-modal';

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '50%',
    backgroundColor: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const buttonStyles = `
  .btn {
    margin: 0 5px;
    margin-bottom: 15px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    height: 30px;
    padding: 0px 20px;
    text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
    background: linear-gradient(
      92.88deg,
      rgb(69, 94, 181) 9.16%,
      rgb(86, 67, 204) 43.89%,
      rgb(103, 63, 215) 64.72%
    );
    transition: all 0.5s ease 0s;

    &:hover {
      box-shadow: rgb(80 63 205 / 50%) 0px 1px 40px;
      transition: all 0.1s ease 0s;
    }
  }
`;

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
    });
    setModalIsOpen(true);
  };

  // Funkcja do zamykania modalu edycji
  const closeEditModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
    setUpdatedUserData({});
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
      console.log(response);
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
      <style>{buttonStyles}</style>
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
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="btn"
                >
                  Delete
                </button>
                <button onClick={() => openEditModal(user)} className="btn">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeEditModal}
        style={customModalStyles}
      >
        <h2>Edit User</h2>
        <form style={formStyles}>
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
          <button type="button" onClick={handleEditUser} className="btn">
            Save
          </button>
          <button type="button" onClick={closeEditModal} className="btn">
            Cancel
          </button>
        </form>
      </Modal>
    </StyledCenter>
  );
};

export default AdminPanel;
