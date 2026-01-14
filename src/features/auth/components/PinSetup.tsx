import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export function PinSetup() {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [error, setError] = useState('');
  const { setupPin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (pin.length < 4) {
      setError('O PIN deve ter pelo menos 4 dígitos');
      return;
    }

    if (pin !== confirmPin) {
      setError('Os PINs não coincidem');
      return;
    }

    if (!securityQuestion.trim()) {
      setError('Por favor, insira uma pergunta de segurança');
      return;
    }

    if (!securityAnswer.trim()) {
      setError('Por favor, insira uma resposta de segurança');
      return;
    }

    try {
      await setupPin(pin, securityQuestion, securityAnswer);
      navigate('/flares');
    } catch (err) {
      setError('Erro ao configurar PIN. Tente novamente.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-6 h-6 text-accent-primary" />
        </div>
        <CardTitle className="text-center">Configure seu PIN</CardTitle>
        <CardDescription className="text-center">
          Crie um PIN de 4-6 dígitos para proteger seus dados
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="pin">PIN (4-6 dígitos)</Label>
            <Input
              id="pin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
              className="text-center text-2xl tracking-widest"
              autoFocus
            />
          </div>

          <div>
            <Label htmlFor="confirmPin">Confirme o PIN</Label>
            <Input
              id="confirmPin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value.replace(/[^0-9]/g, ''))}
              className="text-center text-2xl tracking-widest"
            />
          </div>

          <div className="border-t border-border pt-4 mt-6">
            <p className="text-sm text-text-secondary mb-4">
              Configure uma pergunta de segurança para recuperar seu PIN
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="question">Pergunta de Segurança</Label>
                <Input
                  id="question"
                  type="text"
                  value={securityQuestion}
                  onChange={(e) => setSecurityQuestion(e.target.value)}
                  placeholder="Ex: Qual é o nome do seu primeiro animal de estimação?"
                />
              </div>

              <div>
                <Label htmlFor="answer">Resposta</Label>
                <Input
                  id="answer"
                  type="text"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  placeholder="Sua resposta"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-sm text-contamination-primary">{error}</p>}

          <Button type="submit" className="w-full">
            Criar PIN
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
