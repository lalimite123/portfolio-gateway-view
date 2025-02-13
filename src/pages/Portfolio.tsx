
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

const Portfolio = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Mon Portfolio</h1>
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200" />
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-1">Projet {item}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Titre du projet</h3>
                <p className="text-gray-600">
                  Description du projet avec quelques détails sur les technologies utilisées et les objectifs atteints.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
