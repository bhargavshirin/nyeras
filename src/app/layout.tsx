import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nyeras - Affordable E-learning with Certification & Job Placement",
  description: "Nyeras is an e-learning platform by Nyera Educational Trust (R), offers affordable courses with certifications and internships to prepare students for government and MNC jobs. With experienced faculty and 100% placement assistance, including mock interviews and LinkedIn profile guidance, Nyeras is committed to helping students become industry-ready. Join 2000+ successful students who have achieved top placements through our programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
