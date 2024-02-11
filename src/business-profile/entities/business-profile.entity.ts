import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessProfileDocument = BusinessProfile & Document;

@Schema()
export class BusinessProfile {
  @Prop({ type: String, required: true })
  query: string;

  @Prop({ type: Boolean, required: true, default: false })
  email_written: boolean;

  @Prop({ type: String })
  business_id?: string;

  @Prop({ type: String })
  google_id?: string;

  @Prop({ type: String })
  place_id?: string;

  @Prop({ type: String })
  phone_number?: string;

  @Prop({ type: String })
  name?: string;

  @Prop({ type: Number })
  latitude?: number;

  @Prop({ type: Number })
  longitude?: number;

  @Prop({ type: String })
  full_address?: string;

  @Prop({ type: Number })
  review_count?: number;

  @Prop({ type: Number })
  rating?: number;

  @Prop({ type: String })
  timezone?: string;

  @Prop({ type: String })
  website?: string;

  @Prop({ type: Boolean, default: false })
  verified: boolean;

  @Prop({ type: String })
  cid?: string;

  @Prop({ type: String })
  owner_id?: string;

  @Prop({ type: String })
  owner_link?: string;

  @Prop({ type: String })
  owner_name?: string;

  @Prop({ type: String })
  business_status?: string;

  @Prop({ type: String })
  type?: string;

  @Prop({ type: [String] })
  subtypes?: string[];

  @Prop({
    type: [{ photo_id: String, photo_url: String, photo_url_large: String }],
  })
  photos_sample?: {
    photo_id?: string;
    photo_url?: string;
    photo_url_large?: string;
  }[];

  @Prop({ type: Object })
  reviews_per_rating?: Record<string, number>;

  @Prop({ type: Number })
  photo_count?: number;

  @Prop({ type: Object })
  about?: {
    summary?: string;
    details?: Record<string, any>;
  };

  @Prop({ type: String })
  address?: string;

  @Prop({ type: String })
  order_link?: string;

  @Prop({ type: String })
  price_level?: string;

  @Prop({ type: String })
  district?: string;

  @Prop({ type: String })
  street_address?: string;

  @Prop({ type: String })
  city?: string;

  @Prop({ type: String })
  zipcode?: string;

  @Prop({ type: String })
  state?: string;

  @Prop({ type: String })
  country?: string;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt?: Date;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;
}

export const BusinessProfileSchema =
  SchemaFactory.createForClass(BusinessProfile);

BusinessProfileSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
