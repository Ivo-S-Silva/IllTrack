import { Droplet } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';

export function ContaminationList() {
  // Placeholder para Fase 2
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Contaminações</h1>
        <Button>
          Nova Contaminação
        </Button>
      </div>

      <EmptyState
        icon={Droplet}
        title="Nenhuma contaminação registrada"
        description="Registre contaminações por glúten para identificar padrões e origens."
        action={
          <Button>
            Registrar Primeira Contaminação
          </Button>
        }
      />
    </div>
  );
}
