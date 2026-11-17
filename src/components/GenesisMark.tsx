export function GenesisMark() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(126,224,255,0.28),transparent_62%)] blur-2xl" />
      <svg viewBox="0 0 320 320" className="relative h-full w-full genesis-orbit">
        <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="160" cy="160" r="86" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="160" cy="132" r="58" fill="none" stroke="#3ee0a4" strokeWidth="3" opacity="0.9" />
        <circle cx="128" cy="186" r="58" fill="none" stroke="#f5c14a" strokeWidth="3" opacity="0.9" />
        <circle cx="192" cy="186" r="58" fill="none" stroke="#8b9cff" strokeWidth="3" opacity="0.9" />
        <circle cx="160" cy="168" r="18" fill="#7ee0ff" opacity="0.9" />
        <circle cx="160" cy="168" r="8" fill="#04212c" />
      </svg>
    </div>
  );
}
