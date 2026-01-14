import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Sidebar } from '@/components/common/Sidebar';
import { Header } from '@/components/common/Header';

export function MainLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/pin-entry" replace />;
  }

  return (
    <div className="flex h-screen bg-background-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
