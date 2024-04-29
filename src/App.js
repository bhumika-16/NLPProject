// App.js

// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Content from './Content';
// import './App.css';

// function App() {
//   const [selectedFeature, setSelectedFeature] = useState('imageGenerator'); // Default feature

//   const handleFeatureSelect = (feature) => {
//     setSelectedFeature(feature);
//   };
//   return (
//     <div className="app">
//       <Sidebar  onFeatureSelect={handleFeatureSelect} currentFeature={selectedFeature} />
//       <div className="main-content">
        
//         <Content selectedFeature={selectedFeature} />
//       </div>
//     </div>
//   );
// }

// // export default App;
// // App.js or a similar parent component
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Content from './Content';

// const App = () => {
//   const [selectedFeature, setSelectedFeature] = useState('semanticAnalysis'); // Default feature

//   return (
//     <div className="app">
//       <Sidebar onFeatureSelect={setSelectedFeature} currentFeature={selectedFeature} />
//       <Content selectedFeature={selectedFeature} />
//     </div>
//   );
// };
// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './HomePage';
import Content from './Content'; // Your main content component
import './App.css';

const App = () => {
  const [currentFeature, setCurrentFeature] = useState('home');

  const handleFeatureSelect = (feature) => {
    setCurrentFeature(feature);
  };

  return (
    <div className="app">
      <Sidebar onFeatureSelect={handleFeatureSelect} currentFeature={currentFeature} />
      <div className="main-content">
        {currentFeature === 'home' && <Home />}
        {currentFeature === 'imageGenerator' && <Content selectedFeature={currentFeature} />}
        {currentFeature === 'semanticAnalysis' && <Content selectedFeature={currentFeature} />}
        {currentFeature === 'contentAnalysis' && <Content selectedFeature={currentFeature} />}
        {currentFeature === 'translation' && <Content selectedFeature={currentFeature} />}
        {/* Add more conditional rendering for other features */}
      </div>
    </div>
  );
};

// export default App;

export default App;
