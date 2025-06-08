
import ProductForm from "@/components/ProductForm";

const Index = () => {
  return (
    <div className="bg-gray-1 min-h-screen pb-8 pt-20 dark:bg-customBlue lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
