'use client';
import { MenuCategory, MenuItem } from "@/app/types";
import { useState, useEffect, use } from "react";

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {

        // Fetch menu items from an API or database
        async function fetchMenuItems() {
            // Placeholder for fetching logic
            const items: MenuItem[] = [
                // Example menu items
                { id: 1, name: "Caesar Salad", category: MenuCategory.Appetizer, price: 8.99, description: "Fresh romaine lettuce with Caesar dressing", tags: ["glutenfree"], imageUrl: "/images/caesar_salad.jpg" },
                { id: 2, name: "Grilled Chicken", category: MenuCategory.MainCourse, price: 15.99, description: "Juicy grilled chicken breast with herbs", tags: ["low-carb"], imageUrl: "/images/grilled_chicken.jpg" },
                { id: 3, name: "Chocolate Cake", category: MenuCategory.Dessert, price: 6.99, description: "Rich chocolate cake with ganache frosting", tags: ["vegetarian"], imageUrl: "/images/chocolate_cake.jpg" },
                { id: 4, name: "Lemonade", category: MenuCategory.Drinks, price: 3.99, description: "Refreshing homemade lemonade", tags: ["vegan"], imageUrl: "/images/lemonade.jpg" },
                { id: 5, name: "Spicy Tofu Stir-fry", category: MenuCategory.MainCourse, price: 12.99, description: "Tofu stir-fried with vegetables in a spicy sauce", tags: ["vegan", "spicy"], imageUrl: "/images/spicy_tofu_stirfry.jpg" },
                { id: 6, name: "Gluten-Free Brownie", category: MenuCategory.Dessert, price: 5.99, description: "Delicious brownie made with gluten-free ingredients", tags: ["glutenfree"], imageUrl: "/images/gluten_free_brownie.jpg" },
                { id: 7, name: "Sugar-Free Iced Tea", category: MenuCategory.Drinks, price: 2.99, description: "Iced tea with no added sugar", tags: ["sugarfree"], imageUrl: "/images/sugar_free_iced_tea.jpg" },
            ];
            setMenuItems(items);
        }
        fetchMenuItems();
    }, []);

    const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategory | null>(null);

    useEffect(() => {
        // If we have menu items and no active category yet, set a default
        if (menuItems.length > 0 && activeMenuCategory === null) {
            setActiveMenuCategory(menuItems[0].category);
        }
    }, [menuItems, activeMenuCategory]);

    return (
        <main className="">

            <header id="header" className="w-full h-[200vh] relative text-white flex flex-col justify-evenly">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('../menu_header.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col px-4 m-16">
                    <h1 className="text-6xl font-bold mb-8 text-start">What's On Our Menu</h1>
                    <div className="h-42 w-1/2 bg-red-500" />
                </div>
                <div className="relative z-10 flex flex-col items-end px-4 m-16">
                    <p className="text-2xl italic text-end mb-4">
                        Delicious food, inviting ambiance—everything you love, all in one place.
                    </p>
                    <div className="h-42 w-3/5 bg-blue-500" />
                </div>
            </header>


            <article>
                <nav>
                    <ul className="flex space-x-4 justify-center my-8">
                        <li>
                            <button
                                onClick={() => setActiveMenuCategory(MenuCategory.Drinks)}
                                className={`text-xl font-semibold px-3 py-1 rounded ${activeMenuCategory === MenuCategory.Drinks ? 'bg-gray-800 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                                Drinks
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenuCategory(MenuCategory.Appetizer)}
                                className={`text-xl font-semibold px-3 py-1 rounded ${activeMenuCategory === MenuCategory.Appetizer ? 'bg-gray-800 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                                Appetizers
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenuCategory(MenuCategory.MainCourse)}
                                className={`text-xl font-semibold px-3 py-1 rounded ${activeMenuCategory === MenuCategory.MainCourse ? 'bg-gray-800 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                                Main Courses
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenuCategory(MenuCategory.Dessert)}
                                className={`text-xl font-semibold px-3 py-1 rounded ${activeMenuCategory === MenuCategory.Dessert ? 'bg-gray-800 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                                Desserts
                            </button>
                        </li>
                    </ul>
                </nav>
                <section className="container mx-auto flex justify-center gap-4 flex-wrap">
                    {/* Render filtered items based on active menu category (defaults to first category when loaded) */}
                    {
                        menuItems
                            .filter(item => (activeMenuCategory ? item.category === activeMenuCategory : true))
                            .map(item => (
                                <div key={item.id} id={`menu-item-${item.id}`} className="bg-red-500 p-8 rounded-xl w-xs flex flex-col justify-between">
                                    <div className="flex flex-row justify-between mb-2">
                                        <h3 className="text-xl font-semibold w-2/3">{item.name}</h3>
                                        <p className="text-lg font-semibold self-center">${item.price.toFixed(2)}</p>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    <div id="allergens">
                                        {
                                            item.tags.length > 0 ? (
                                                <div className="flex flex-row flex-wrap gap-1 mt-4">
                                                        {item.tags.map((tag, index) => (
                                                            <span key={index} className="text-sm text-gray-700 bg-green-400 px-2 py rounded-full">{tag}</span>
                                                        ))}
                                                    </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            ))
                    }
                </section>
            </article>
            {/* Menu content goes here */}
        </main>
    );
}