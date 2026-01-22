import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: number;
  name: string;
  category: "men" | "women" | "unisex" | "new-arrivals" | "limited-edition";
  price: string;
  image: string;
  images?: string[];
  heading: string;
  description?: string;
}

const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ["men", "women", "unisex", "new-arrivals", "limited-edition"]
  },
  price: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String }],
  heading: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true
});

export default mongoose.model<IProduct>('Product', ProductSchema);