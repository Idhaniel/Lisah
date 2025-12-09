import { Routes, Route } from "react-router-dom";
import WelcomeTour from "./pages/WelcomeTour";
import "./App.css";
import BrokerSelection from "./pages/BrokerSelection";
import IdentityVerification from "./pages/IdentityVerification";
import UploadKYCDocument from "./pages/UploadKYCDocument";
import SelfieVerification from "./pages/SelfieVerification";
import KYCPendingReview from "./pages/KYCPendingReview";
import KYCApproved from "./pages/KYCApproved";
import KYCRejected from "./pages/KYCRejected";
import PortfolioOverview from "./pages/PortfolioOverview";
import DepositFunds from "./pages/DepositFunds";
import SelectAsset from "./pages/SelectAsset";
import OrderAndLock from "./pages/OrderAndLock";
import ReviewOrder from "./pages/ReviewOrder";
import OrderAndLockSuccessPage from "./pages/OrderAndLockSuccess";
import LockedAssetDetails from "./pages/LockedAssetDetails";
import AddToVault from "./pages/AddToVault";
import WithdrawalManagementPage from "./pages/withdrawal/release_management";
import WithdrawalSuccess from "./pages/withdrawal/withdrawl_success";
import WithdrawalProcessing from "./pages/withdrawal/fund_processing";
import ChooseBank from "./pages/withdrawal/choose_bank";
import PortfolioMenu from "./pages/PortfolioMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeTour />} />
      <Route path="/broker-selection" element={<BrokerSelection />} />
      <Route path="/identity-verification" element={<IdentityVerification />} />
      <Route path="/upload-kyc-document" element={<UploadKYCDocument />} />
      <Route path="/selfie-verification" element={<SelfieVerification />} />
      <Route path="/kyc-pending" element={<KYCPendingReview />} />
      <Route path="/kyc-approved" element={<KYCApproved />} />
      <Route path="/kyc-rejected" element={<KYCRejected />} />
      {/* <Route path="/portfolio" element={<PortfolioOverview />} /> */}
      <Route path="/portfolio" element={<PortfolioMenu />} />
      <Route path="/deposit-funds" element={<DepositFunds />} />
      <Route path="/select-asset" element={<SelectAsset />} />
      <Route path="/order-and-lock" element={<OrderAndLock />} />
      <Route path="/review-order" element={<ReviewOrder />} />
      <Route path="/order-lock-success" element={<OrderAndLockSuccessPage />} />
      <Route path="/locked-assets" element={<LockedAssetDetails />} />
      <Route path="/top-up" element={<AddToVault />} />
      <Route
        path="/withdrawal-management"
        element={<WithdrawalManagementPage />}
      />
      <Route path="/withdrawal-success" element={<WithdrawalSuccess />} />
      <Route path="/withdrawal-processing" element={<WithdrawalProcessing />} />
      <Route path="/choose-bank" element={<ChooseBank />} />
    </Routes>
  );
}

export default App;
