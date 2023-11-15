import './App.css';
import Table from './modules/table/Table';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';




function App() {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <section className='App'>
        <article className='table_container'>
          <Table/>
        </article>
      </section>
    </QueryClientProvider>
  );
}

export default App;
