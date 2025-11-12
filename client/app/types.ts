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

export type serviceCard = {
  id: number;
  tag: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  description?: string;
  tags: string[];
  imageUrl?: string;

};

export enum MenuCategory {
  Appetizer = "Appetizer",
  MainCourse = "Main Course",
  Dessert = "Dessert",
  Drinks = "Drinks",
}

export enum Tags {
  Sugarfree = "sugarfree",
  Vegan = "vegan",
  Glutenfree = "glutenfree",
  Spicy = "spicy",
  ContainsNuts = "contains-nuts",
  LowCarb = "low-carb",
}