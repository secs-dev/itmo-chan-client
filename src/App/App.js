import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import TopicList from '../Widgets/Topics/TopicList';
import Topic from "../Widgets/Topics/Topic"; // Импортируем TopicList
// import ThreadList from '../Widgets/ThreadList';
// import Thread from './Thread';
// import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
// import CreateThreadForm from './CreateThreadForm';
// import CreatePostForm from './CreatePostForm';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/topics" element={<TopicList />} />
            <Route path="/topic/:topicId" element={<Topic />} />
            {/*<Route path="/forums/:forumId" element={<ThreadList />} />*/}
            {/*<Route path="/thread/:threadId" element={<Thread />} />*/}
            {/*<Route path="/login" element={<LoginForm />} />*/}
            {/*<Route path="/register" element={<RegistrationForm />} />*/}
            {/*<Route path="/create-thread" element={<CreateThreadForm />} />*/}
            {/*<Route path="/create-post" element={<CreatePostForm />} />*/}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
