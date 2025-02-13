
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogIn } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(password);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur votre portfolio",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: "Mot de passe incorrect",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md px-8 py-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
            <LogIn className="w-6 h-6 text-gray-700" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Portfolio Privé</h2>
          <p className="mt-2 text-gray-600">Veuillez vous connecter pour continuer</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Entrez le mot de passe"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-0"
          >
            Accéder au Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
