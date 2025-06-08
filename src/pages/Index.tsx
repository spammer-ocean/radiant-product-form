
import ProductForm from "@/components/ProductForm";
import ProductDashboard from "@/components/ProductDashboard";

const Index = () => {
  return (
    <div className="bg-gray-1 min-h-screen pb-8 pt-20 dark:bg-customBlue lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp space-y-8" data-wow-delay=".2s">
          <ProductDashboard />
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
