import "./globals.css";
import StoreProvider from "./StoreProvider";
import Providers from "./provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Providers>{children}</Providers>
        </StoreProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
