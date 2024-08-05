// // client/src/App.js
// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       posts: [],
//       nameInput: '',
//       titleInput: '',
//       errors: [],
//       editUserId: null,
//       editPostId: null
//     };
//   }

//   componentDidMount() {
//     this.fetchUsers();
//     this.fetchPosts();
//   }

//   fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       this.setState({ users: response.data });
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/posts');
//       this.setState({ posts: response.data });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   handleUserInputChange = (event) => {
//     this.setState({ nameInput: event.target.value });
//   };

//   handlePostInputChange = (event) => {
//     this.setState({ titleInput: event.target.value });
//   };

//   handleAddUser = async () => {
//     const { nameInput } = this.state;
//     if (!nameInput) {
//       this.setState({ errors: ['Name is required.'] });
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/users', { name: nameInput });
//       this.setState({ nameInput: '', errors: [] });
//       this.fetchUsers();
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   handleAddPost = async () => {
//     const { titleInput } = this.state;
//     if (!titleInput) {
//       this.setState({ errors: ['Title is required.'] });
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/posts', { title: titleInput });
//       this.setState({ titleInput: '', errors: [] });
//       this.fetchPosts();
//     } catch (error) {
//       console.error('Error adding post:', error);
//     }
//   };

//   handleEditUser = (id) => {
//     this.setState({ editUserId: id });
//   };

//   handleEditPost = (id) => {
//     this.setState({ editPostId: id });
//   };

//   handleUpdateUser = async () => {
//     const { nameInput, editUserId } = this.state;
//     if (!nameInput) {
//       this.setState({ errors: ['Name is required.'] });
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5000/users/${editUserId}`, { name: nameInput });
//       this.setState({ nameInput: '', editUserId: null, errors: [] });
//       this.fetchUsers();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   handleUpdatePost = async () => {
//     const { titleInput, editPostId } = this.state;
//     if (!titleInput) {
//       this.setState({ errors: ['Title is required.'] });
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5000/posts/${editPostId}`, { title: titleInput });
//       this.setState({ titleInput: '', editPostId: null, errors: [] });
//       this.fetchPosts();
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/users/${id}`);
//       this.fetchUsers();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   handleDeletePost = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/posts/${id}`);
//       this.fetchPosts();
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   render() {
//     const { users, posts, nameInput, titleInput, errors, editUserId, editPostId } = this.state;

//     return (
//       <div className="App">
//         <h1>Users</h1>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.name}
//               <button onClick={() => this.handleEditUser(user.id)}>Edit</button>
//               <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <div>
//           <h2>{editUserId ? 'Update User' : 'Add User'}</h2>
//           <input
//             type="text"
//             value={nameInput}
//             onChange={this.handleUserInputChange}
//             placeholder="Enter name"
//           />
//           {editUserId ? (
//             <button onClick={this.handleUpdateUser}>Update</button>
//           ) : (
//             <button onClick={this.handleAddUser}>Add</button>
//           )}
//         </div>

//         <h1>Posts</h1>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>
//               {post.title}
//               <button onClick={() => this.handleEditPost(post.id)}>Edit</button>
//               <button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <div>
//           <h2>{editPostId ? 'Update Post' : 'Add Post'}</h2>
//           <input
//             type="text"
//             value={titleInput}
//             onChange={this.handlePostInputChange}
//             placeholder="Enter title"
//           />
//           {editPostId ? (
//             <button onClick={this.handleUpdatePost}>Update</button>
//           ) : (
//             <button onClick={this.handleAddPost}>Add</button>
//           )}
//         </div>
//         {errors.length > 0 && (
//           <ul>
//             {errors.map((error, index) => (
//               <li key={index} style={{ color: 'red' }}>
//                 {error}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import LoginWrapper from './Component/LoginWrapper';
import Login from './Component/Login';
import Footer from './Component/Footer';
import Home from './Component/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginWrapper  />} />
        <Route path="/login" element={<LoginWrapper />} /> {/* Use the wrapper */}
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
