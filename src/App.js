import './App.css';
import { SimpleStoreProvider} from './context/context'
//components
import { SampleGroupFormPage } from './components/form/sampleGroupForm';
// import { SearchBox } from './components/searchBox';
// import { Table } from './components/showingTable/table';
// import { Filtering } from './components/filteringTable'
import { TableApp } from './components/showingTable/tableHopeItsGood'
import DispenserPage from './components/plates/Dispenser';

import { ThreeFixedElements } from './components/form/threeFixedElements'

function App() {
  return (

    <SimpleStoreProvider>
      {/* <TableApp /> */}
      {/* <Filtering /> */}
      {/* <Table /> */}
      {/* <SearchBox />*/}
      <SampleGroupFormPage /> 
      <DispenserPage />
      {/* <ThreeFixedElements /> */}
    </SimpleStoreProvider>



   
  );
}


//questions:
//    input values?

export default App;
