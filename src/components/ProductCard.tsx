
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Weight, Factory, Grid3X3, Tag } from 'lucide-react';

interface ProductCardProps {
  product: {
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
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-muted/50 border-b border-border">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {product.reNumber}
            </CardTitle>
            {product.oemNumber && (
              <p className="text-sm text-muted-foreground mt-1">
                OEM: {product.oemNumber}
              </p>
            )}
          </div>
          {product.image && (
            <img
              src={product.image}
              alt={product.description}
              className="w-16 h-16 rounded-lg object-cover border border-border"
            />
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <p className="text-card-foreground text-sm leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-card-foreground">
              {product.oemName}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.weight && (
              <div className="flex items-center gap-2">
                <Weight className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {product.weight}
                </span>
              </div>
            )}
            
            {product.packaging && (
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {product.packaging}
                </span>
              </div>
            )}
            
            {product.groupProduct && (
              <div className="flex items-center gap-2">
                <Grid3X3 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {product.groupProduct}
                </span>
              </div>
            )}
          </div>
          
          {product.modelsSuitable && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-card-foreground">
                  Suitable Models:
                </span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                {product.modelsSuitable}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
