import { icons, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons | string;
  fallback?: keyof typeof icons;
}

export default function Icon({ name, fallback = "CircleAlert", ...props }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons] || icons[fallback];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
