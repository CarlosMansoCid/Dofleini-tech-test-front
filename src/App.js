import './App.css';
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
    <QueryClientProvider client={queryClient}>
      <section className='App'>
        <Dock buttons={buttonsData}/>
        <article className='table_container'>
          <Table/>
        </article>
      </section>
    </QueryClientProvider>
  );
}

export default App;
