import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Auth components
import { PinEntry } from '@/features/auth/components/PinEntry';
import { PinSetup } from '@/features/auth/components/PinSetup';
import { PinRecovery } from '@/features/auth/components/PinRecovery';

// Feature components
import { FlareList } from '@/features/flares/components/FlareList';
import { ContaminationList } from '@/features/contaminations/components/ContaminationList';
import { CalendarView } from '@/features/calendar/components/CalendarView';
import { ExportDialog } from '@/features/export/components/ExportDialog';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'pin-entry',
        element: <PinEntry />
      },
      {
        path: 'pin-setup',
        element: <PinSetup />
      },
      {
        path: 'recovery',
        element: <PinRecovery />
      }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/flares" replace />
      },
      {
        path: 'flares',
        element: <FlareList />
      },
      {
        path: 'contaminations',
        element: <ContaminationList />
      },
      {
        path: 'calendar',
        element: <CalendarView />
      },
      {
        path: 'export',
        element: <ExportDialog />
      }
    ]
  }
]);
