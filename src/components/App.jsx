import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';
import data from './Statistics/data.json';
import user from './Profile/user.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';


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



