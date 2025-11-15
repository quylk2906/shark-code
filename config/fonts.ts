import { Unbounded } from 'next/font/google';

export const unbounded = Unbounded({
  subsets: ['latin'], // Or other desired subsets like 'cyrillic', 'vietnamese'
  weight: ['400', '500', '600', '700'], // Or specific weights like 'light', 'regular', 'bold', etc.
  variable: '--font-unbounded', // Optional: Define a CSS variable for Tailwind CSS or custom CSS
  display: 'swap', // Optional: For improved font loading behavior
});

//  const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });
