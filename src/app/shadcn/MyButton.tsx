import { Button } from "@/components/ui/button";

interface Props {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  handleClick?: () => void;
  className?: string | undefined;
  children: React.ReactNode;
}
export function MyButton({ variant, children, handleClick, className }: Props) {
  return (
    <Button className={className} onClick={handleClick} variant={variant}>
      {children}
    </Button>
  );
}
