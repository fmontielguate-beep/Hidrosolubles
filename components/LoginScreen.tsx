
import React, { useState } from 'react';
import { User, CourseMode } from '../types';

interface LoginScreenProps {
  onLogin: (user: User, mode: CourseMode) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showTrial, setShowTrial] = useState(false);

  const handleOfficialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !licenseNumber) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    const userKey = `course_completed_${licenseNumber}`;
    if (localStorage.getItem(userKey)) {
      setError('Este número de colegiado ya ha completado el curso.');
      return;
    }
    setError('');
    onLogin({ firstName, lastName, licenseNumber }, CourseMode.OFFICIAL);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Helena2016') {
      setError('');
      onLogin({ firstName: 'Usuario', lastName: 'de Prueba', licenseNumber: '0000' }, CourseMode.TRIAL);
    } else {
      setError('Contraseña incorrecta.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Curso de Vitaminas Hidrosolubles</h1>
        <p className="text-center text-gray-600 mb-8">Formación para Residentes de Pediatría</p>
        
        {!showTrial ? (
          <>
            <form onSubmit={handleOfficialSubmit} className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Acceso Oficial</h2>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">Nº de Colegiado</label>
                <input
                  type="text"
                  id="licenseNumber"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Iniciar Curso
              </button>
            </form>
            <div className="text-center mt-6">
              <button onClick={() => { setShowTrial(true); setError(''); }} className="text-sm text-indigo-600 hover:underline">
                Acceder a la versión de prueba
              </button>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleTrialSubmit} className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Versión de Prueba</h2>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Iniciar Prueba
              </button>
            </form>
            <div className="text-center mt-6">
              <button onClick={() => { setShowTrial(false); setError(''); }} className="text-sm text-indigo-600 hover:underline">
                Volver al acceso oficial
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
