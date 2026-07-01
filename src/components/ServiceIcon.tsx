import {
  HardDrive,
  Cpu,
  RefreshCw,
  DatabaseBackup,
  Wind,
  ShieldCheck,
  Lightbulb,
  MemoryStick,
  Wifi,
  Printer,
  DownloadCloud,
  AtSign,
  LifeBuoy,
  Wrench,
  Laptop,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  HardDrive,
  Cpu,
  RefreshCw,
  DatabaseBackup,
  Wind,
  ShieldCheck,
  Lightbulb,
  MemoryStick,
  Wifi,
  Printer,
  DownloadCloud,
  AtSign,
  LifeBuoy,
  Wrench,
  Laptop,
};

/** Renderiza un icono de lucide a partir de su nombre. */
export function ServiceIcon({ name, className, size = 24 }: { name: string; className?: string; size?: number }) {
  const Icon = map[name] ?? Lightbulb;
  return <Icon className={className} size={size} aria-hidden="true" />;
}
