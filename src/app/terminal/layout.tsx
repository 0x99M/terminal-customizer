'use client';

import { FONTS } from '@/data/fonts';

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Dynamically preload Google Fonts based on font selector */}
        {FONTS.map((font) => {
          const fontUrl = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
          return [
            <link
              key={`preload-${font}`}
              rel="preload"
              href={fontUrl}
              as="style"
            />,
            <link
              key={`stylesheet-${font}`}
              rel="stylesheet"
              href={fontUrl}
            />
          ];
        })}
      </head>
      {children}
    </>
  );
}