// import Link from "next/link";
// import { logoutAction } from "@/app/actions";
// import { Button } from "@/components/ui/button";

// export function AuthStatus({
//   fullName
// }: {
//   fullName?: string | null;
// }) {
//   if (!fullName) {
//     return (
//       <div className="flex items-center gap-3">
//         <Link href="/login">
//           <Button>Login</Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center gap-3">
//       <span className="hidden text-sm font-medium text-slate-700 md:inline">
//         Hi, {fullName}
//       </span>
//       <form action={logoutAction}>
//         <Button variant="outline">Logout</Button>
//       </form>
//     </div>
//   );
// }


// import Link from "next/link";
// import { logoutAction } from "@/app/actions";
// import { Button } from "@/components/ui/button";

// export function AuthStatus({
//   fullName
// }: {
//   fullName?: string | null;
// }) {
//   if (!fullName) {
//     return (
//       <div className="flex items-center gap-3">
//         <Link href="/login">
//           <Button className="bg-white text-emerald-700 hover:bg-yellow-50">
//             Login
//           </Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center gap-3">
//       <span className="hidden rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white md:inline">
//         Hi, {fullName}
//       </span>
//       <form action={logoutAction}>
//         <Button
//           variant="outline"
//           className="border-white/40 bg-white/10 text-white hover:bg-white/20"
//         >
//           Logout
//         </Button>
//       </form>
//     </div>
//   );
// }

// import Link from "next/link";
// import { logoutAction } from "@/app/actions";
// import { Button } from "@/components/ui/button";

// export function AuthStatus({
//   fullName
// }: {
//   fullName?: string | null;
// }) {
//   if (!fullName) {
//     return (
//       <div className="flex items-center gap-3">
//         <Link href="/login">
//           <Button className="bg-violet-700 text-white hover:bg-violet-800">
//             Login
//           </Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center gap-3">
//       <span className="hidden rounded-full bg-violet-100 px-3 py-2 text-sm font-medium text-violet-900 md:inline">
//         Hi, {fullName}
//       </span>
//       <form action={logoutAction}>
//         <Button
//           variant="outline"
//           className="border-violet-300 bg-white text-violet-800 hover:bg-violet-50"
//         >
//           Logout
//         </Button>
//       </form>
//     </div>
//   );
// }



import Link from "next/link";
import { logoutAction } from "@/app/actions";
import { Button } from "@/components/ui/button";

export function AuthStatus({
  fullName
}: {
  fullName?: string | null;
}) {
  if (!fullName) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Login
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden rounded-full bg-violet-100 px-3 py-2 text-sm font-medium text-violet-900 md:inline">
        Hi, {fullName}
      </span>
      <form action={logoutAction}>
        <Button
          variant="outline"
          className="border-slate-300 bg-white text-violet-700 hover:bg-violet-50"
        >
          Logout
        </Button>
      </form>
    </div>
  );
}