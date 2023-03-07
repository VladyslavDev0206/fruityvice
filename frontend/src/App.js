import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fruits from './Components/FruitList/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import createStore from './store';
import Provider from 'react-redux/es/components/Provider';

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Fruits favorite={false}/>}/>
          <Route path="/favorites" element={<Fruits favorite={true}/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
