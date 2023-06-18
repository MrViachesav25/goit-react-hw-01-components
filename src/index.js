
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);






















// import { App } from 'components/App';
// import './index.css';

// const div = document.createElement('div');
// const root = document.getElementById('root');

// root.append(div);
// !================================================================

// const paragraph = React.createElement('p', {id: 'test-Id', children: ['I am P']})

// const p = <p id ='test-Id'>I am P</p>
// const div = React.createElement('div', {name: 'main', children: p}); 
// console.log('div :>>', div);

// const div = <div>{p}</div>
// const Head = (props) => {
//   return <p className = {props.class} id = {props.id}>I AM PPPP</p>
// }
// const Card = () => {
//     return data.map((photo) => {
//     return (<div key={photo.id} className="card" style={{width: '18rem'}}>
//     <img src={photo.url} className="card-img-top" alt={photo.title} />
//     <div className="card-body">
//       <h5 className="card-title">Card title: {photo.title}</h5>
//       <Head id = 'id-123' class = 'card-item'/>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="http" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>)
//   })
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Card/>);




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
