import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CopilotDocument = Copilot & Document;

@Schema()
export class Copilot {
  @Prop({ type: String })
  name?: string;

  @Prop({ type: String })
  business_name?: string;

  @Prop({ type: String })
  message?: string;

  @Prop({ type: [{ title: String, url: String }] })
  web_sources?: { title: string; url: string }[];

  @Prop({ type: String })
  conversation_id?: string;

  @Prop({ type: Date })
  conversation_expiration?: Date;

  @Prop({ type: Boolean })
  conversation_ended?: boolean;

  @Prop({ type: Boolean })
  is_user_message_offensive?: boolean;

  @Prop({ type: Number })
  user_messages_limit?: number;

  @Prop({ type: Number })
  user_messages_remaining?: number;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt?: Date;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;
}

export const CopilotSchema = SchemaFactory.createForClass(Copilot);

CopilotSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
