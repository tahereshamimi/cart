import './App.scss';
import { Container } from 'react-bootstrap'
import { CartPage } from './components/cartPage';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartPage />
    </QueryClientProvider>



  );
}

export default App;
