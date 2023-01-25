import './App.css';
import { SimpleStoreProvider} from './context/context'
//components
import { SampleGroupFormPage } from './components/sampleGroupForm';
// import { SearchBox } from './components/searchBox';
// import { Table} from './components/table'
// import { Filtering } from './components/filteringTable'
// import TableApp from './components/tableHopeItsGood';

import { MicroPlate } from './components/microPlate';
import DispenserPage from './components/Dispenser';


function App() {
  return (

    <SimpleStoreProvider>
      {/* <TableApp /> */}
      {/* <Filtering /> */}
        {/* <Table /> */}
        {/* <SearchBox />*/}
        <SampleGroupFormPage /> 


    <DispenserPage />
    </SimpleStoreProvider>



   
  );
}


//questions:
//    input values?

export default App;
