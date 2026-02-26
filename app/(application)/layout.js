import { Children } from "react";



export default function RootLayout({ children }) {
  return (
      <>       
       <header style={{background: 'red'}}>Header (Application)      </header>
        {children}
        <footer style={{background: 'red'}}>Footer (Application) </footer>
      </>
  );
}
