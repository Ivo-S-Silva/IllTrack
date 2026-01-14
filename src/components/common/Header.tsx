import { formatDate } from '@/lib/utils/dates';

export function Header() {
  const today = new Date();

  return (
    <header className="h-16 bg-background-secondary border-b border-border px-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-text-secondary">
          {formatDate(today, "EEEE, d 'de' MMMM 'de' yyyy")}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* Espaço para ações futuras (notificações, configurações, etc) */}
      </div>
    </header>
  );
}
