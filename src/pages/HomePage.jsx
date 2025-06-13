import CallToAction from '../components/CallToAction/CallToAction';
import Specials from '../components/Specials/Specials';
import CustomersSay from '../components/CustomersSay/CustomersSay';
import Chicago from '../components/Chicago/Chicago';

export default function HomePage() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}