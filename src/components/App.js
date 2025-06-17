import { AvailableTimesProvider } from './context/AvailableTimesContext';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <AvailableTimesProvider>
      <BookingPage />
    </AvailableTimesProvider>
  );
}