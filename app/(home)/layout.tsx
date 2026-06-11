// (home) layout — brutalist redesign, brings its own Header + Footer
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="brutalist-root">{children}</div>;
}
