import { Children } from "react";

//metadata
export const metadata = {
  title:{
    template: "%s | Technical Agency",
    default : "Technical Agency",
  },
  description: "Hello World",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        {/* <header style={{background: 'orange'}}>Header</header> */}
        {children}
        {/* <footer style={{background: 'green '}}>Footer</footer> */}

      </body>
    </html>
  );
}
