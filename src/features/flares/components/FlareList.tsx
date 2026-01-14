import { Flame } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';

export function FlareList() {
  // Placeholder para Fase 2
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Crises</h1>
        <Button>
          Nova Crise
        </Button>
      </div>

      <EmptyState
        icon={Flame}
        title="Nenhuma crise registrada"
        description="Comece registrando sua primeira crise para acompanhar sintomas e medicações."
        action={
          <Button>
            Registrar Primeira Crise
          </Button>
        }
      />
    </div>
  );
}
