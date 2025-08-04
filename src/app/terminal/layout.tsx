import { FontLoader } from '@/components/font-loader';

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FontLoader />
      {children}
    </>
  );
}