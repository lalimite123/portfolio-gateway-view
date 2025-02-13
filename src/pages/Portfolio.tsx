
import { useAuth } from '../contexts/AuthContext';
import { Menu } from 'lucide-react';

const Portfolio = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-deep-purple">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-16">
        <div className="text-mint text-6xl font-light space-y-2">
          <h1>kilom</h1>
          <h1>carmel</h1>
        </div>
        <button 
          className="fixed top-8 right-4 text-mint"
          onClick={() => {}}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Image Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/c9b2203f-2c9c-4aff-9d24-d54889865b92.png" 
            alt="Portfolio landscape" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
            alt="Nature aerial view" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-16 bg-gray-800/50 backdrop-blur-sm py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center">
          <img 
            src="public/lovable-uploads/c9b2203f-2c9c-4aff-9d24-d54889865b92.png"
            alt="ISTAG Logo" 
            className="w-16 h-16 object-contain"
          />
          <h2 className="text-mint text-2xl ml-4">kilom carmel</h2>
          <button 
            className="ml-auto text-mint"
            onClick={() => {}}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dark Section with Forest Image */}
      <div className="w-full h-96 relative mt-16">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Forest view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Footer Section */}
      <div className="bg-deep-purple py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center">
          <img 
            src="public/lovable-uploads/c9b2203f-2c9c-4aff-9d24-d54889865b92.png"
            alt="ISTAG Logo" 
            className="w-16 h-16 object-contain"
          />
          <h2 className="text-mint text-2xl ml-4">kilom carmel</h2>
          <button 
            className="ml-auto text-mint"
            onClick={() => {}}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Non sécurisé Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-deep-purple py-4">
        <div className="w-full max-w-7xl mx-auto px-4">
          <p className="text-mint text-center">
            Non sécurisé — 18.215.180.215
          </p>
          <div className="w-full bg-mint/20 h-1 mt-2">
            <div className="bg-mint h-full w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
