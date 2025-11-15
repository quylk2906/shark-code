import LogoAnimated from '@/components/animated-logo/LogoAnimated';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <LogoAnimated />
    </div>
  );
};

export default Loading;
