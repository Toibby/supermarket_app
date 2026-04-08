// import "./globals.css";

// export const metadata = {
//   title: "FreshMart Supermarket System",
//   description: "Real supermarket website with customer storefront and admin operations."
// };

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import "./globals.css";
import { ToastContainer } from "@/components/shared/toast-container";

export const metadata = {
  title: "FreshMart Supermarket System",
  description: "Real supermarket website with customer storefront and admin operations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}