type MonoIconProps = {
  size?: number;
  variant?: 'teal' | 'navy' | 'mono';
  ariaLabel?: string;
  decorative?: boolean;
};

export default function MonoIcon({ size = 72, variant = 'teal', ariaLabel, decorative }: MonoIconProps) {
  const colors = { teal: '#106D78', navy: '#344D63', mono: '#111111' } as const;
  const fill = colors[variant] || colors.teal;
  const isDecorative = decorative ?? !ariaLabel;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      role={isDecorative ? 'presentation' : 'img'}
      aria-hidden={isDecorative}
      aria-label={isDecorative ? undefined : ariaLabel}
      focusable="false"
    >
      <mask id="cutC" maskUnits="userSpaceOnUse">
        <rect width="96" height="96" fill="#000" />
        <circle cx="48" cy="48" r="44" fill="#fff" />
        <circle cx="48" cy="48" r="32" fill="#000" />
        <rect x="68" y="20" width="24" height="56" rx="8" fill="#000" />
      </mask>
      <circle cx="48" cy="48" r="44" fill={fill} mask="url(#cutC)" />
      <rect x="40" y="18" width="12" height="60" rx="6" fill={fill} />
    </svg>
  );
}
