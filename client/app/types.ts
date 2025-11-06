import React from "react";

export type OfferCardProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ContactCardProps = {
    id: number;
    icon: React.ReactNode;
    title: string;
    text: string;
};
