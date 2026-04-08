// export function SectionHeader({
//   eyebrow,
//   title,
//   description
// }: {
//   eyebrow?: string;
//   title: string;
//   description?: string;
// }) {
//   return (
//     <div className="max-w-2xl">
//       {eyebrow ? (
//         <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
//           {eyebrow}
//         </p>
//       ) : null}
//       <h2 className="text-3xl font-black tracking-tight text-slate-900">
//         {title}
//       </h2>
//       {description ? (
//         <p className="mt-3 text-base text-slate-600">{description}</p>
//       ) : null}
//     </div>
//   );
// }


export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-green-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}