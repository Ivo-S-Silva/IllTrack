import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export function PinEntry() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { checkUser, login, isAuthenticated } = useAuth();
  const [hasUser, setHasUser] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser().then(exists => {
      setHasUser(exists);
      if (!exists) {
        navigate('/auth/pin-setup');
      }
    });
  }, [checkUser, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/flares');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (pin.length < 4) {
      setError('O PIN deve ter pelo menos 4 dígitos');
      return;
    }

    const success = await login(pin);
    if (!success) {
      setError('PIN incorreto');
      setPin('');
    }
  };

  if (hasUser === null) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-6 h-6 text-accent-primary" />
        </div>
        <CardTitle className="text-center">Digite seu PIN</CardTitle>
        <CardDescription className="text-center">
          Insira seu PIN para acessar o Flare Tracker
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="Digite seu PIN"
              className="text-center text-2xl tracking-widest"
              autoFocus
            />
            {error && <p className="text-sm text-contamination-primary mt-2">{error}</p>}
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => navigate('/auth/recovery')}
          >
            Esqueci meu PIN
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
