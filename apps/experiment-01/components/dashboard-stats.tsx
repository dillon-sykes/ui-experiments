import { RiBriefcaseLine, RiTargetLine, RiTrendingUpLine, RiStarLine } from "@remixicon/react";

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    trend: "up" | "down";
  };
  icon: React.ReactNode;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change.trend === "up";
  const trendColor = isPositive ? "text-emerald-500" : "text-red-500";

  return (
    <div className="relative p-4 lg:p-5 group before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-input/30 before:via-input before:to-input/30 last:before:hidden">
      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div className="max-[480px]:hidden size-10 shrink-0 rounded-full bg-primary/25 border border-primary/50 flex items-center justify-center text-primary">
          {icon}
        </div>
        {/* Content */}
        <div>
          <div className="font-medium tracking-widest text-xs uppercase text-muted-foreground/60">
            {title}
          </div>
          <div className="text-2xl font-semibold mb-2">{value}</div>
          <div className="text-xs text-muted-foreground/60">
            <span className={`font-medium ${trendColor}`}>
              {isPositive ? "↗" : "↘"} {change.value}
            </span>{" "}
            vs last week
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardStats() {
  const stats = [
    {
      title: "Jobs Analyzed",
      value: "47",
      change: {
        value: "+12",
        trend: "up" as const,
      },
      icon: (
        <RiBriefcaseLine size={20} aria-hidden="true" />
      ),
    },
    {
      title: "Good Matches",
      value: "23",
      change: {
        value: "+8",
        trend: "up" as const,
      },
      icon: (
        <RiTargetLine size={20} aria-hidden="true" />
      ),
    },
    {
      title: "Match Rate",
      value: "68%",
      change: {
        value: "+5%",
        trend: "up" as const,
      },
      icon: (
        <RiTrendingUpLine size={20} aria-hidden="true" />
      ),
    },
    {
      title: "Avg Score",
      value: "74.2",
      change: {
        value: "+2.1",
        trend: "up" as const,
      },
      icon: (
        <RiStarLine size={20} aria-hidden="true" />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 min-[1200px]:grid-cols-4 border border-border rounded-xl bg-gradient-to-br from-sidebar/60 to-sidebar">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}