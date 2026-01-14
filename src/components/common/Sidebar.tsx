import { NavLink } from 'react-router-dom';
import { Flame, Droplet, Calendar, FileText, LogOut } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/flares', icon: Flame, label: 'Crises' },
  { to: '/contaminations', icon: Droplet, label: 'Contaminações' },
  { to: '/calendar', icon: Calendar, label: 'Calendário' },
  { to: '/export', icon: FileText, label: 'Exportar' },
];

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-background-secondary border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <Flame className="w-6 h-6 text-accent-primary" />
          Flare Tracker
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
                'hover:bg-hover',
                isActive
                  ? 'bg-hover text-text-primary font-medium'
                  : 'text-text-secondary'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-text-secondary hover:bg-hover hover:text-text-primary transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
