// import React, { useState, useEffect } from 'react';

// function App() {
//   const [contenuto, setContenuto] = useState('Contenuto iniziale');

//   useEffect(() => {
//     const updateContenuto = () => {
//       const minWidth = window.innerWidth;
//       const nuovoContenuto = minWidth >= 1440 ? 
//         "Contenuto per schermi grandi" : 
//         "Contenuto per schermi piccoli";
//       setContenuto(nuovoContenuto);
//     };

//     window.addEventListener('resize', updateContenuto);

//     // Effettua la chiamata iniziale per impostare il contenuto iniziale
//     updateContenuto();

//     return () => window.removeEventListener('resize', updateContenuto);
//   }, []);

//   return (
//     <div>
//       {contenuto}
//     </div>
//   );
// }

// export default App;