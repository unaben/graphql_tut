export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <div style={{width: '200px', height: '100vh', background: 'steelblue'}}></div>
          {children}
          </div>
      </body>
    </html>
  );
}
