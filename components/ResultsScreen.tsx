import React, { useState } from 'react';
import { User, QuizResult, CourseMode } from '../types';
import { courseData } from '../services/courseData';

declare const html2canvas: any;

interface ResultsScreenProps {
  user: User;
  results: QuizResult[];
  mode: CourseMode;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ user, results, mode, onRestart }) => {
  const totalScore = results.reduce((acc, result) => acc + result.score, 0);
  const totalQuestions = results.reduce((acc, result) => acc + result.total, 0);
  const percentage = totalQuestions > 0 ? (totalScore / totalQuestions) * 100 : 0;
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = () => {
    const element = document.getElementById('printable-area');
    if (element) {
      setIsGenerating(true);
      html2canvas(element, { 
        scale: 2, // Aumenta la escala para una mejor resolución
        useCORS: true,
        backgroundColor: null // Mantiene el fondo del elemento
      }).then((canvas: HTMLCanvasElement) => {
        setGeneratedImage(canvas.toDataURL('image/png'));
        setIsGenerating(false);
      }).catch((error: any) => {
        console.error("Error al generar la imagen:", error);
        setIsGenerating(false);
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-2xl">
              <div id="printable-area" className="bg-white rounded-lg shadow-xl p-8">
                  <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Resultados del Curso</h1>
                  <p className="text-center text-gray-600 mb-6">Vitaminas Hidrosolubles en Pediatría</p>

                  <div className="border-t border-b border-gray-200 py-4 mb-6">
                      <p><strong>Estudiante:</strong> {user.firstName} {user.lastName}</p>
                      {mode === CourseMode.OFFICIAL && <p><strong>Nº de Colegiado:</strong> {user.licenseNumber}</p>}
                      <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
                  </div>

                  <div className="text-center mb-6">
                      <p className="text-lg text-gray-600">Puntuación Final</p>
                      <p className="text-6xl font-bold text-indigo-600 my-2">{totalScore} / {totalQuestions}</p>
                      <p className={`text-2xl font-semibold ${percentage >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                          {percentage.toFixed(1)}% - {percentage >= 60 ? 'Aprobado' : 'No Aprobado'}
                      </p>
                  </div>
                  
                  <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Desglose por Módulo:</h3>
                      <ul className="space-y-2">
                          {results.map(result => (
                               <li key={result.moduleId} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                  <span className="font-medium text-gray-800">{courseData.find(m => m.id === result.moduleId)?.title}</span>
                                  <span className="font-bold text-indigo-600">{result.score} / {result.total}</span>
                               </li>
                          ))}
                      </ul>
                  </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                      onClick={handleGenerateImage}
                      disabled={isGenerating}
                      className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
                  >
                      {isGenerating ? 'Generando Imagen...' : 'Generar Certificado en Imagen'}
                  </button>
                  {mode === CourseMode.TRIAL && (
                      <button
                          onClick={onRestart}
                          className="py-2 px-6 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                          Reiniciar Prueba
                      </button>
                  )}
              </div>
          </div>
      </div>

      {generatedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-4xl w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Certificado Generado</h2>
            <div className="overflow-auto max-h-[70vh] border rounded-md">
              <img src={generatedImage} alt="Resultados del curso" className="w-full h-auto" />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
              <a 
                href={generatedImage} 
                download={`certificado-curso-${user.licenseNumber}.png`}
                className="py-2 px-5 text-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Descargar
              </a>
              <button
                onClick={() => setGeneratedImage(null)}
                className="py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultsScreen;