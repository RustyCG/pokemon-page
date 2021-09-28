import './app.scss';
import Title from './components/title/Title'
import Collection from './components/collection/Collection';

function App() {
  return (
		<div className="app">
				<Title className="title"/>
				<Collection className="collection"/>
		</div>
  );
}

export default App;
