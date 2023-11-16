import './App.css';
import ModalContextProvider from './contexts/ModalContextProvider';
import Dock from './modules/dock/Dock.module';
import Table from './modules/table/Table.module';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const buttonsData = [
  {
    title: 'Agregar rol',
    variant: 'add',
    action: () => {}
  },
  {
    title: 'Agregar entidad',
    variant: 'add',
    action: ()=>{}     
  }
]



function App() {
  const queryClient = new QueryClient()
  
  return (
    <ModalContextProvider>
      <QueryClientProvider client={queryClient}>
        <section className='App'>
          <Dock buttons={buttonsData}/>
          <article className='table_container'>
            <Table/>
          </article>
        </section>
      </QueryClientProvider>
    </ModalContextProvider>
  );
}

export default App;
