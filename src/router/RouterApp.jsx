import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const RouterApp = () => {
  return (
    <Routes>
      {/** Login and sing up */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/** JournalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
