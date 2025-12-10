import { ThemeProvider } from 'next-themes';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // ThemeProvider from next-themes wraps the entire application to enable theme switching
    // The 'attribute' prop specifies that the theme class should be applied to the HTML element
    // This enables seamless theme switching and persistence across sessions
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}