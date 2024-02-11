import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CopilotDocument = Copilot & Document;

@Schema()
export class Copilot {
  @Prop({ type: String })
  business_name?: string;

  @Prop({ type: String })
  message?: string;
}

export const CopilotSchema =
  SchemaFactory.createForClass(Copilot);

CopilotSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
