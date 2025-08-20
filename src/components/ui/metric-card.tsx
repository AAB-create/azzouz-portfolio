import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MetricCardProps {
  value: string | number
  label: string
  trend?: string
  icon?: ReactNode
  variant?: "default" | "success" | "warning"
  className?: string
}

export function MetricCard({ 
  value, 
  label, 
  trend, 
  icon, 
  variant = "default",
  className 
}: MetricCardProps) {
  const variantStyles = {
    default: "text-primary",
    success: "text-success",
    warning: "text-warning"
  }

  return (
    <div className={cn("metric-card group", className)}>
      <div className="flex items-start justify-between mb-3">
        <div className={cn("text-3xl font-bold", variantStyles[variant])}>
          {value}
        </div>
        {icon && (
          <div className={cn("p-2 rounded-lg", variantStyles[variant], "bg-opacity-10")}>
            {icon}
          </div>
        )}
      </div>
      <div className="text-sm font-medium text-muted-foreground mb-1">
        {label}
      </div>
      {trend && (
        <div className="text-xs text-success font-medium">
          {trend}
        </div>
      )}
    </div>
  )
}