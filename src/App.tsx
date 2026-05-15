import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import MyPolicies from './pages/MyPolicies';
import ClaimSimulator from './pages/ClaimSimulator';
import DocumentCenter from './pages/DocumentCenter';
import Pricing from './pages/Pricing';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="policies" element={<MyPolicies />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="simulator" element={<ClaimSimulator />} />
        <Route path="documents" element={<DocumentCenter />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;