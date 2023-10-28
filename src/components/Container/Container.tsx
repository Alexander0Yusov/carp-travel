const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-w-[320px] w-full mx-[auto] px-[20px]
  | min-[480px]:w-[480px]
  | min-[768px]:w-[768px] min-[768px]:px-[32px]
  | min-[1280px]:w-[1280px] min-[1280px]:px-[24px]"
    >
      {children}
    </div>
  );
};

export default Container;
