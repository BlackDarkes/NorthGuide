export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center h-screen bg-linear-to-b from-muted/40 via-background to-background">
      {children}
    </main>
  );
}
