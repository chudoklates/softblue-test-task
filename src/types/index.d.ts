import { PropsWithChildren } from "react";

export type Experience = {
  id: number;
  company: string;
  description: string;
  from: string;
  to: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  content: string;
  createdAt: Date;
};

export type HomeContext = {
  comments: Comment[];
  experience: Experience[];
  services: Service[];
};

export type ContentPageContext = {
  comments: Comment[];
  title: string;
};

export interface SectionProps extends PropsWithChildren {
  content: string;
  subtitle: string;
  title: string;
}
