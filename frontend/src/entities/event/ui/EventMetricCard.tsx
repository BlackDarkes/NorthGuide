export const  MetricCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="bg-muted/30 border border-border/40 rounded-lg p-4 flex flex-col gap-2 transition-colors hover:bg-muted/50">
      <div className="text-muted-foreground">{icon}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-semibold text-foreground">{value}</p>
    </div>
  );
}