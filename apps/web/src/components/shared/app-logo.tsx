// import Link from "next/link";
// import { Store } from "lucide-react";
// import { APP_NAME } from "@/lib/constants";

// export function AppLogo() {
//   return (
//     <Link href="/" className="flex items-center gap-2">
//       <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">
//         <Store className="h-5 w-5" />
//       </span>
//       <span className="text-xl font-black tracking-tight text-slate-900">
//         {APP_NAME}
//       </span>
//     </Link>
//   );
// }



import Link from "next/link";
import { Store } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 via-orange-400 to-rose-500 text-slate-950 shadow-soft">
        <Store className="h-5 w-5" />
      </span>
      <span className="text-xl font-black tracking-tight text-white">
        {APP_NAME}
      </span>
    </Link>
  );
}