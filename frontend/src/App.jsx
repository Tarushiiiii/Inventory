import './App.css'
import {SearchAutocomplete} from './components/SearchFilter';
import {AddItem} from './components/AddItem';
import {DisplayItem} from './components/DisplayItem';
import {ItemInfo} from './components/ItemInfo';

function App() {
  return (
    <div>
    <h1>
      This is my Inventory Project.
    </h1>
    <div className = "flex flex-width">
      <SearchAutocomplete/>
    <AddItem/>
    <DisplayItem />
    <ItemInfo />
    </div>
    </div>
  );
}

export default App
