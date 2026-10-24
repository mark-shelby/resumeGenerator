import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

export default function App() {
  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}