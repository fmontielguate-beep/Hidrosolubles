
import React, { useState, useCallback } from 'react';
import LoginScreen from './components/LoginScreen';
import CourseView from './components/CourseView';
import ResultsScreen from './components/ResultsScreen';
import { User, CourseMode, QuizResult } from './types';
import { courseData } from './services/courseData';

type AppState = 'LOGIN' | 'COURSE' | 'RESULTS';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('LOGIN');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentMode, setCurrentMode] = useState<CourseMode>(CourseMode.OFFICIAL);
  const [finalResults, setFinalResults] = useState<QuizResult[]>([]);

  const handleLogin = useCallback((user: User, mode: CourseMode) => {
    setCurrentUser(user);
    setCurrentMode(mode);
    setAppState('COURSE');
  }, []);

  const handleCourseComplete = useCallback((results: QuizResult[]) => {
    setFinalResults(results);
    if (currentMode === CourseMode.OFFICIAL && currentUser) {
      const userKey = `course_completed_${currentUser.licenseNumber}`;
      localStorage.setItem(userKey, 'true');
    }
    setAppState('RESULTS');
  }, [currentMode, currentUser]);

  const handleRestart = useCallback(() => {
    setAppState('LOGIN');
    setCurrentUser(null);
    setFinalResults([]);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case 'LOGIN':
        return <LoginScreen onLogin={handleLogin} />;
      case 'COURSE':
        if (currentUser) {
          return <CourseView courseData={courseData} user={currentUser} onCourseComplete={handleCourseComplete} />;
        }
        // Fallback to login if user is somehow null
        handleRestart();
        return null;
      case 'RESULTS':
        if (currentUser) {
          return <ResultsScreen user={currentUser} results={finalResults} mode={currentMode} onRestart={handleRestart} />;
        }
        // Fallback to login
        handleRestart();
        return null;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;
