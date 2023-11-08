import './App.css';
import Dashbord from './Dashbord/Dashbord.js';
import MobileCheck from './Component/Utilities/MobileCheck/MobileCheck';
import OfferState from './context/OfferState';
function App() {
  return (
    <OfferState>
    <div >
      <MobileCheck/>
     <Dashbord/>
    </div>
    </OfferState>
  );
}

export default App;
