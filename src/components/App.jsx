import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';
import data from '../data.json';
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


const App = () => {
  return (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data}/> 
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions} />
  </div>
  );
};

export default App;



