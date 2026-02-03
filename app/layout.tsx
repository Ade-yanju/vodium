import "./globals.css"

export const metadata = {
  title: "Vodium — Credit Built on Trust",
  description: "Infrastructure-first credit for Africa’s premium consumers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
