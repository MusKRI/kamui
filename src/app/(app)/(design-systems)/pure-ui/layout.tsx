const PureUILayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative pure-ui bg-background text-foreground">
      {children}
    </div>
  );
};

export default PureUILayout;
