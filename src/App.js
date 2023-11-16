import './App.css';
import MainDock from './components/mainDock/MainDock';
import ModalContextProvider from './contexts/ModalContextProvider';
import Dock from './modules/dock/Dock.module';
import Table from './modules/table/Table.module';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';





function App() {
  const queryClient = new QueryClient()
  
  return (
    <ModalContextProvider>
      <QueryClientProvider client={queryClient}>
        <section className='App'>
          <MainDock/>
          <article className='table_container'>
            <Table/>
          </article>
        </section>
      </QueryClientProvider>
    </ModalContextProvider>
  );
}

export default App;
