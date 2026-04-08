// import Link from "next/link";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function LoginPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-md px-4 py-14 lg:px-8">
//         <ShellCard
//           title="Login"
//           description="Supabase auth wiring comes in Batch 3."
//         >
//           <div className="grid gap-4">
//             <Input placeholder="Email address" />
//             <Input placeholder="Password" type="password" />
//             <Button>Login</Button>
//             <p className="text-sm text-slate-600">
//               No account?{" "}
//               <Link href="/register" className="font-semibold text-brand-700">
//                 Register
//               </Link>
//             </p>
//           </div>
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }



import Link from "next/link";
import { redirect } from "next/navigation";
import { loginAction } from "@/app/actions";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { ShellCard } from "@/components/shared/shell-card";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/shared/submit-button";
import { getCurrentProfile } from "@/lib/storefront";

export default async function LoginPage() {
  const profile = await getCurrentProfile();

  if (profile) {
    redirect("/account");
  }

  return (
    <StorefrontLayout>
      <section className="mx-auto max-w-md px-4 py-14 lg:px-8">
        <ShellCard
          title="Login"
          description="Access your customer account"
        >
          <form action={loginAction} className="grid gap-4">
            <Input name="email" placeholder="Email address" type="email" required />
            <Input name="password" placeholder="Password" type="password" required />
            <SubmitButton pendingText="Logging in...">Login</SubmitButton>
            <p className="text-sm text-slate-600">
              No account?{" "}
              <Link href="/register" className="font-semibold text-brand-700">
                Register
              </Link>
            </p>
          </form>
        </ShellCard>
      </section>
    </StorefrontLayout>
  );
}