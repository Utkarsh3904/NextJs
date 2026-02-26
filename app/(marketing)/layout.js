import { Children } from "react";



export default function RootLayout({ children }) {
  return (
      <>       
       <header style={{background: 'orange'}}>Header (Marketing)      </header>
        {children}
        <footer style={{background: 'orange'}}>Footer (Marketing) </footer>
      </>
  );
}
