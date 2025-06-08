
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Package, Search } from 'lucide-react';

interface Product {
  id: string;
  reNumber: string;
  oemNumber?: string;
  description: string;
  weight?: string;
  packaging?: string;
  oemName: string;
  groupProduct?: string;
  modelsSuitable?: string;
  image?: string;
}

interface ProductDashboardProps {
  products?: Product[];
}

// Sample data for demonstration
const sampleProducts: Product[] = [
  {
    id: '1',
    reNumber: 'RE-2024-001',
    oemNumber: 'BMW-7584321',
    description: 'High-performance brake pad set designed for BMW 3 Series vehicles. Features advanced ceramic compound for superior stopping power and reduced brake dust.',
    weight: '2.5 kg',
    packaging: 'Box of 4 pads',
    oemName: 'BMW',
    groupProduct: 'Brake System',
    modelsSuitable: 'BMW 3 Series (E90, E91, E92, E93), BMW 1 Series (E87, E88)',
  },
  {
    id: '2',
    reNumber: 'RE-2024-002',
    oemNumber: 'MB-9876543',
    description: 'Premium oil filter with advanced filtration technology for Mercedes-Benz vehicles. Ensures optimal engine performance and longevity.',
    weight: '0.8 kg',
    packaging: 'Individual box',
    oemName: 'Mercedes-Benz',
    groupProduct: 'Engine Components',
    modelsSuitable: 'Mercedes-Benz C-Class (W204, W205), E-Class (W212, W213)',
  },
  {
    id: '3',
    reNumber: 'RE-2024-003',
    oemNumber: 'VW-4567890',
    description: 'Durable suspension spring assembly for Volkswagen Golf series. Provides excellent ride comfort and handling stability.',
    weight: '3.2 kg',
    packaging: 'Pair in protective foam',
    oemName: 'Volkswagen',
    groupProduct: 'Suspension',
    modelsSuitable: 'VW Golf (Mk6, Mk7), VW Jetta (A6, A7), VW Passat (B7, B8)',
  },
];

const ProductDashboard = ({ products = sampleProducts }: ProductDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      product.reNumber.toLowerCase().includes(searchLower) ||
      product.oemNumber?.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.oemName.toLowerCase().includes(searchLower) ||
      product.groupProduct?.toLowerCase().includes(searchLower) ||
      product.modelsSuitable?.toLowerCase().includes(searchLower) ||
      product.weight?.toLowerCase().includes(searchLower) ||
      product.packaging?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border shadow-lg">
        <CardHeader className="bg-muted/50 border-b border-border">
          <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
            <Package className="w-6 h-6 text-primary" />
            Product Dashboard
          </CardTitle>
          <p className="text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
          
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products by RE number, OEM, description, brand, group, models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-input"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {filteredProducts.length === 0 ? (
            <div className="p-8 text-center">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm ? `No products found matching "${searchTerm}"` : 'No products found'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDashboard;
