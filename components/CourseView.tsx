import React, { useState, useCallback } from 'react';
import { ModuleData, QuizResult, User } from '../types';

interface CourseViewProps {
  courseData: ModuleData[];
  user: User;
  onCourseComplete: (results: QuizResult[]) => void;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
};

const Quiz: React.FC<{ questions: any[]; onQuizComplete: (score: number) => void }> = ({ questions, onQuizComplete }) => {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (questionIndex: number, answer: string) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
        let score = 0;
        questions.forEach((q, index) => {
            if(answers[index] === q.correctAnswer) {
                score++;
            }
        });
        onQuizComplete(score);
    };
    
    const allAnswered = Object.keys(answers).length === questions.length;

    return (
        <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Autoevaluación</h3>
            {questions.map((q, index) => (
                <div key={index} className="mb-6 p-4 rounded-md bg-gray-50">
                    <p className="font-semibold text-gray-700 mb-2">{index + 1}. {q.question}</p>
                    <div className="space-y-2">
                        {q.options.map((option: string, optionIndex: number) => {
                            const isSelected = answers[index] === option;
                            const isCorrect = q.correctAnswer === option;

                            let buttonClass = "w-full text-left p-2 border rounded-md transition-colors ";
                            if (submitted) {
                                if (isCorrect) {
                                    buttonClass += "bg-green-100 border-green-400 text-green-800";
                                } else if (isSelected && !isCorrect) {
                                    buttonClass += "bg-red-100 border-red-400 text-red-800";
                                } else {
                                    buttonClass += "bg-white border-gray-300";
                                }
                            } else {
                                buttonClass += isSelected ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-100 border-gray-300";
                            }

                            return (
                                <button
                                    key={optionIndex}
                                    onClick={() => !submitted && handleAnswerChange(index, option)}
                                    className={buttonClass}
                                    disabled={submitted}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
            {!submitted && (
                 <button 
                    onClick={handleSubmit} 
                    disabled={!allAnswered}
                    className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                     Enviar respuestas
                 </button>
            )}
            {submitted && (
                <div className="mt-4 p-4 bg-blue-100 border border-blue-300 rounded-md text-center">
                    <p className="font-bold text-blue-800">Has completado esta autoevaluación.</p>
                </div>
            )}
        </div>
    );
};


const CourseView: React.FC<CourseViewProps> = ({ courseData, user, onCourseComplete }) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const currentModule = courseData[currentModuleIndex];
  const isModuleQuizCompleted = quizResults.some(r => r.moduleId === currentModule.id);

  const handleQuizComplete = useCallback((score: number) => {
    setQuizResults(prev => [
      ...prev.filter(r => r.moduleId !== currentModule.id),
      { moduleId: currentModule.id, score, total: currentModule.quiz.length }
    ]);
  }, [currentModule.id, currentModule.quiz.length]);

  const goToNextModule = () => {
    if (currentModuleIndex < courseData.length - 1) {
      setCurrentModuleIndex(prev => prev + 1);
    } else {
      onCourseComplete(quizResults);
    }
  };

  const goToPrevModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
    }
  };
  
  const allQuizzesCompleted = quizResults.length === courseData.length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <header className="mb-6 text-center">
           <h1 className="text-4xl font-extrabold text-gray-800">Curso: Vitaminas Hidrosolubles</h1>
           <p className="text-lg text-gray-600 mt-1">Bienvenido/a, {user.firstName} {user.lastName}</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <ProgressBar current={currentModuleIndex + 1} total={courseData.length} />
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">{currentModule.title}</h2>
            
            <div className="prose max-w-none text-gray-700 space-y-4">
                {currentModule.content.map((paragraph, index) => (
                    <p key={index}>{paragraph.split('- **').map((part, i) => i === 0 ? part : <><br />- <strong>{part.split(':**')[0]}:</strong>{part.split(':**')[1]}</>)}</p>
                ))}
            </div>

            <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800">Resumen del Módulo</h4>
                <p className="text-indigo-700 mt-2">{currentModule.summary}</p>
            </div>

            <Quiz key={currentModule.id} questions={currentModule.quiz} onQuizComplete={handleQuizComplete} />

            <div className="mt-8 flex justify-between items-center">
                <button 
                    onClick={goToPrevModule}
                    disabled={currentModuleIndex === 0}
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                    Anterior
                </button>
                {currentModuleIndex < courseData.length - 1 ? (
                    <button 
                        onClick={goToNextModule}
                        disabled={!isModuleQuizCompleted}
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Siguiente Módulo
                    </button>
                ) : (
                    <button 
                        onClick={() => onCourseComplete(quizResults)}
                        disabled={!allQuizzesCompleted}
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Finalizar Curso y Ver Resultados
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;