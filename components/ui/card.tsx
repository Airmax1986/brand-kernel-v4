import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "feature" | "plan" | "instagram"
  as?: keyof JSX.IntrinsicElements
}

const cardVariants = {
  default: "bg-background border border-border rounded-card-large p-card-padding",
  feature: "bg-background-card-blue rounded-card-large overflow-hidden aspect-square",
  plan: "bg-background border border-border rounded-card-large p-card-padding hover:shadow-card transition-shadow duration-300",
  instagram: "bg-background rounded-card overflow-hidden aspect-square hover:scale-[1.02] transition-transform duration-300"
}

export function Card({ 
  children, 
  className, 
  variant = "default",
  as: Component = "div"
}: CardProps) {
  return (
    <Component className={cn(cardVariants[variant], className)}>
      {children}
    </Component>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("pt-4", className)}>
      {children}
    </div>
  )
}