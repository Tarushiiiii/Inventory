import './App.css'
import {SearchAutocomplete} from './components/SearchFilter';
import {DisplayItem} from './components/DisplayItem';
import {ItemInfo} from './components/ItemInfo';

function App() {
  return (
    <div>
      <h1>
        This is my Inventory Project.
      </h1> 
      <SearchAutocomplete/>
      <div className = "flex flex-width">
        <DisplayItem />
        <ItemInfo />
      </div>
    </div>
  );
}

export default App
