import { FileText } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';

export function ExportDialog() {
  // Placeholder para Fase 4
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Exportar Dados</h1>
      </div>

      <EmptyState
        icon={FileText}
        title="Exportação em desenvolvimento"
        description="A funcionalidade de exportar dados em PDF estará disponível na Fase 4. Você poderá gerar relatórios completos com suas crises, sintomas e medicações."
      />
    </div>
  );
}
