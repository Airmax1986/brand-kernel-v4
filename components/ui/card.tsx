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

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-h3 font-semibold text-text-primary", className)}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-body text-text-secondary", className)}>
      {children}
    </p>
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