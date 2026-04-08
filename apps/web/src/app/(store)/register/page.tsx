// import Link from "next/link";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function RegisterPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-md px-4 py-14 lg:px-8">
//         <ShellCard
//           title="Create account"
//           description="Customer registration becomes functional with Supabase auth in Batch 3."
//         >
//           <div className="grid gap-4">
//             <Input placeholder="Full name" />
//             <Input placeholder="Email address" />
//             <Input placeholder="Phone number" />
//             <Input placeholder="Password" type="password" />
//             <Button>Create account</Button>
//             <p className="text-sm text-slate-600">
//               Already registered?{" "}
//               <Link href="/login" className="font-semibold text-brand-700">
//                 Login
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
import { registerAction } from "@/app/actions";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { ShellCard } from "@/components/shared/shell-card";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/shared/submit-button";
import { getCurrentProfile } from "@/lib/storefront";

export default async function RegisterPage() {
  const profile = await getCurrentProfile();

  if (profile) {
    redirect("/account");
  }

  return (
    <StorefrontLayout>
      <section className="mx-auto max-w-md px-4 py-14 lg:px-8">
        <ShellCard
          title="Create account"
          description="Register as a supermarket customer"
        >
          <form action={registerAction} className="grid gap-4">
            <Input name="fullName" placeholder="Full name" required />
            <Input name="email" placeholder="Email address" type="email" required />
            <Input name="phone" placeholder="Phone number" />
            <Input name="password" placeholder="Password" type="password" required />
            <SubmitButton pendingText="Creating account...">Create account</SubmitButton>
            <p className="text-sm text-slate-600">
              Already registered?{" "}
              <Link href="/login" className="font-semibold text-brand-700">
                Login
              </Link>
            </p>
          </form>
        </ShellCard>
      </section>
    </StorefrontLayout>
  );
}