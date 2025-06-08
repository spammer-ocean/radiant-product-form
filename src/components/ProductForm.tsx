
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Save, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reNumber: '',
    oemNumber: '',
    description: '',
    weight: '',
    packaging: '',
    oemName: '',
    groupProduct: '',
    modelsSuitable: ''
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      toast({
        title: "Image uploaded successfully",
        description: "Your product image has been added to the form."
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive"
      });
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleSave = () => {
    // Basic validation
    const requiredFields = ['reNumber', 'description', 'oemName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields: RE Number, Description, and OEM Name.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form Data:', formData);
    console.log('Uploaded Image:', uploadedImage);
    
    toast({
      title: "Product saved successfully",
      description: "Your product information has been saved to the system."
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card border-border shadow-lg">
      <CardHeader className="bg-muted/50 border-b border-border">
        <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          Article Information Sheet
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="reNumber" className="text-sm font-medium text-card-foreground">
              RE Number *
            </Label>
            <Input
              id="reNumber"
              value={formData.reNumber}
              onChange={(e) => handleInputChange('reNumber', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter RE Number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="oemNumber" className="text-sm font-medium text-card-foreground">
              OEM Number
            </Label>
            <Input
              id="oemNumber"
              value={formData.oemNumber}
              onChange={(e) => handleInputChange('oemNumber', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter OEM Number"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description" className="text-sm font-medium text-card-foreground">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring min-h-[100px]"
              placeholder="Enter product description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-sm font-medium text-card-foreground">
              Weight
            </Label>
            <Input
              id="weight"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter weight (e.g., 2.5 kg)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="packaging" className="text-sm font-medium text-card-foreground">
              Packaging
            </Label>
            <Input
              id="packaging"
              value={formData.packaging}
              onChange={(e) => handleInputChange('packaging', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter packaging details"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="oemName" className="text-sm font-medium text-card-foreground">
              OEM Name *
            </Label>
            <Input
              id="oemName"
              value={formData.oemName}
              onChange={(e) => handleInputChange('oemName', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter OEM Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="groupProduct" className="text-sm font-medium text-card-foreground">
              Group/Product
            </Label>
            <Input
              id="groupProduct"
              value={formData.groupProduct}
              onChange={(e) => handleInputChange('groupProduct', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring"
              placeholder="Enter group or product category"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="modelsSuitable" className="text-sm font-medium text-card-foreground">
              Models Suitable Applications
            </Label>
            <Textarea
              id="modelsSuitable"
              value={formData.modelsSuitable}
              onChange={(e) => handleInputChange('modelsSuitable', e.target.value)}
              className="bg-background border-border focus:border-ring focus:ring-ring min-h-[80px]"
              placeholder="Enter applicable models and applications"
            />
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="space-y-4">
          <Label className="text-sm font-medium text-card-foreground">Add Product Photo</Label>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
              isDragOver
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50 hover:bg-muted/50'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {uploadedImage ? (
              <div className="space-y-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded product"
                  className="mx-auto max-h-48 rounded-lg object-cover shadow-md"
                />
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('file-upload')?.click()}
                    className="border-border hover:border-primary hover:text-primary"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Replace Image
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setUploadedImage(null)}
                    className="text-destructive border-destructive/50 hover:border-destructive hover:bg-destructive/10"
                  >
                    Remove Image
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Image className="w-16 h-16 mx-auto text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-card-foreground font-medium">
                    Drag and drop your product image here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse files
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="border-primary/50 hover:border-primary hover:bg-primary/10 text-primary"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </div>
            )}
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-6 border-t border-border">
          <Button
            onClick={handleSave}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-2"
          >
            <Save className="w-4 h-4 mr-2" />
            SAVE
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
