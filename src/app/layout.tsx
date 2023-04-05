import './globals.css';

export const metadata = {
  title: 'ccs.dev',
  description: 'home for the ccs engineering org',
}

const themeScript = `
const theme = (() => {
  const peristentTheme = window.localStorage.getItem("theme");

  if(peristentTheme === "dark" || peristentTheme === "light") {
    return peristentTheme;
  }

  const mqTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if(typeof mqTheme.matches === "boolean") {
    return mqTheme.matches ? "dark" : "light";
  }

  return "light";
})();

document.documentElement.dataset.mode = theme;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        { /* eslint-disable-next-line */ }
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,200;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        { /* eslint-disable-next-line */ }
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
