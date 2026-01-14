import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export function PinRecovery() {
  const [step, setStep] = useState<'question' | 'newPin'>('question');
  const [answer, setAnswer] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState('');
  const { currentUser, recoverWithSecurityAnswer, resetPin } = useAuth();
  const navigate = useNavigate();

  const handleAnswerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!answer.trim()) {
      setError('Por favor, insira sua resposta');
      return;
    }

    const isValid = await recoverWithSecurityAnswer(answer);
    if (isValid) {
      setStep('newPin');
    } else {
      setError('Resposta incorreta');
      setAnswer('');
    }
  };

  const handlePinReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPin.length < 4) {
      setError('O PIN deve ter pelo menos 4 dígitos');
      return;
    }

    if (newPin !== confirmPin) {
      setError('Os PINs não coincidem');
      return;
    }

    try {
      await resetPin(newPin);
      navigate('/flares');
    } catch (err) {
      setError('Erro ao redefinir PIN. Tente novamente.');
    }
  };

  if (!currentUser) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-text-secondary">
            Nenhum usuário encontrado
          </p>
        </CardContent>
      </Card>
    );
  }

  if (step === 'question') {
    return (
      <Card>
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
            <KeyRound className="w-6 h-6 text-accent-primary" />
          </div>
          <CardTitle className="text-center">Recuperar PIN</CardTitle>
          <CardDescription className="text-center">
            Responda à sua pergunta de segurança
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAnswerSubmit} className="space-y-4">
            <div>
              <Label className="text-text-secondary">
                {currentUser.securityQuestion}
              </Label>
              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Sua resposta"
                autoFocus
              />
              {error && <p className="text-sm text-contamination-primary mt-2">{error}</p>}
            </div>

            <div className="space-y-2">
              <Button type="submit" className="w-full">
                Verificar Resposta
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => navigate('/auth/pin-entry')}
              >
                Voltar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
          <KeyRound className="w-6 h-6 text-accent-primary" />
        </div>
        <CardTitle className="text-center">Criar Novo PIN</CardTitle>
        <CardDescription className="text-center">
          Crie um novo PIN de 4-6 dígitos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePinReset} className="space-y-4">
          <div>
            <Label htmlFor="newPin">Novo PIN</Label>
            <Input
              id="newPin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={newPin}
              onChange={(e) => setNewPin(e.target.value.replace(/[^0-9]/g, ''))}
              className="text-center text-2xl tracking-widest"
              autoFocus
            />
          </div>

          <div>
            <Label htmlFor="confirmNewPin">Confirme o Novo PIN</Label>
            <Input
              id="confirmNewPin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value.replace(/[^0-9]/g, ''))}
              className="text-center text-2xl tracking-widest"
            />
          </div>

          {error && <p className="text-sm text-contamination-primary">{error}</p>}

          <Button type="submit" className="w-full">
            Criar Novo PIN
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
