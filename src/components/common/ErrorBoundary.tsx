import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-primary p-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-contamination-primary/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-contamination-primary" />
            </div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Algo deu errado
            </h2>
            <p className="text-text-secondary mb-6">
              Ocorreu um erro inesperado. Por favor, tente novamente.
            </p>
            {this.state.error && (
              <pre className="text-xs text-text-muted bg-background-secondary p-4 rounded-md mb-4 overflow-auto text-left">
                {this.state.error.message}
              </pre>
            )}
            <Button onClick={this.handleReset}>
              Tentar Novamente
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
