import { useState } from 'react';
import { AuthModal } from '../components/auth/AuthModal';

export function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/10 to-white">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in to continue your writing journey and connect with readers worldwide
          </p>
        </div>

        <button onClick={() => setModalType('login')}>Login</button>
        <button onClick={() => setModalType('signup')}>Signup</button>

        <AuthModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={modalType}
        />
      </div>
    </div>
  );
}