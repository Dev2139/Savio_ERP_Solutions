import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ModulesSection } from '@/components/home/ModulesSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ModulesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
