export function GenesisMark() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]" aria-hidden="true">
      <div className="pointer-events-none absolute inset-[6%] bg-[radial-gradient(circle_at_22%_48%,rgba(59,130,246,0.72),transparent_52%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-[6%] bg-[radial-gradient(circle_at_78%_48%,rgba(232,163,23,0.62),transparent_52%)] blur-2xl" />
      <img
        src="/brand/genesis-crest.jpg"
        alt=""
        className="relative h-full w-full object-cover object-center [mask-image:radial-gradient(ellipse_47%_49.5%_at_50%_50%,black_88%,transparent_100%)]"
      />
    </div>
  );
}
