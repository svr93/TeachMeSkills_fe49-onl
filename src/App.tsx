import './App.css';
import { PostList } from './features/postlist/postList';
import { Header } from './features/header/header';
import { SignIn } from './features/pages/sign-in';
import { SignUp } from './features/pages/sing-up';
import { Success } from './features/pages/success';
import { SelectPostCard } from './features/pages/select-post';
import { PostCard } from './post.date';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <PostList postCard={PostCard} /> */}
      <SignIn />
      <SignUp />
      <Success />
      <SelectPostCard />
    </div>
  );
}

export default App;
