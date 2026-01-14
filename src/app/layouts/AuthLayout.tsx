import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Flare Tracker
          </h1>
          <p className="text-text-secondary">
            Rastreie suas crises e sintomas
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
