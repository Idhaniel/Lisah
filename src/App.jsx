import { Routes, Route } from 'react-router-dom';
import WelcomeTour from './pages/WelcomeTour';
import './App.css';
import BrokerSelection from './pages/BrokerSelection';
import IdentityVerification from './pages/IdentityVerification';
import UploadKYCDocument from './pages/UploadKYCDocument';
import SelfieVerification from './pages/SelfieVerification';
import KYCPendingReview from './pages/KYCPendingReview';
import KYCApproved from './pages/KYCApproved';
import KYCRejected from './pages/KYCRejected';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomeTour/>}/>
      <Route path='/broker-selection' element={<BrokerSelection/>}/>
      <Route path='/identity-verification' element={<IdentityVerification/>}/>
      <Route path='/upload-kyc-document' element={<UploadKYCDocument/>}/>
      <Route path='/selfie-verification' element={<SelfieVerification/>}/>
      <Route path='/kyc-pending' element={<KYCPendingReview/>}/>
      <Route path='/kyc-approved' element={<KYCApproved/>}/>
      <Route path='/kyc-rejected' element={<KYCRejected/>}/>
    </Routes>
  )
}

export default App;