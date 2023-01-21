import './App.css';
import { SimpleStoreProvider} from './context/context'
//components
import { SampleGroupFormPage } from './components/sampleGroupForm';
import { SearchBox } from './components/searchBox';
import { Table } from './components/table'

function App() {
  return (

    <SimpleStoreProvider>
        <Table />
        {/* <SearchBox />
        <SampleGroupFormPage /> */}
    </SimpleStoreProvider>



   
  );
}


//questions:
//    input values?

export default App;
