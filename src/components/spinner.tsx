type Props = { centerInScreen?: boolean };

export function Spinner({ centerInScreen = true }: Props) {
  return (
    <div className={centerInScreen ? "absolute top-1/2 left-1/2" : ""}>
      <div className="size-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
