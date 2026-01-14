import { Calendar } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';

export function CalendarView() {
  // Placeholder para Fase 3
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Calendário</h1>
      </div>

      <EmptyState
        icon={Calendar}
        title="Calendário em desenvolvimento"
        description="A visualização em calendário estará disponível na Fase 3. Você poderá ver crises, sintomas e contaminações em uma timeline visual."
      />
    </div>
  );
}
