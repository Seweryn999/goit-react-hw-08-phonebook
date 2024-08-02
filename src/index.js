import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import 'modern-normalize';
import './index.css';
import Appv2 from 'components/Appv2';
import { PersistGate } from 'redux-persist/integration/react';
import { ColorProvider } from 'components/colorContext/ColorContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Appv2 />
          </BrowserRouter>
        </PersistGate>
      </ColorProvider>
    </Provider>
  </React.StrictMode>,
);
