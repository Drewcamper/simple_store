import './App.css';
import { SimpleStoreProvider} from './context/context'

import { SampleGroupFormPage } from './components/sampleGroupForm';
import { SearchBox } from './components/searchBox';

function App() {
  return (

    <SimpleStoreProvider>
        <SearchBox />
        <SampleGroupFormPage />
    </SimpleStoreProvider>



   
  );
}


//questions:
//    input values?

export default App;
