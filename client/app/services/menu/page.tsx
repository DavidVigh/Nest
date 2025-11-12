export default function MenuPage() {
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
                    <div className="h-42 w-1/2 bg-red-500"/>
                </div>
                <div className="relative z-10 flex flex-col items-end px-4 m-16">
                    <p className="text-2xl italic text-end mb-4">
                        Delicious food, inviting ambiance—everything you love, all in one place.
                    </p>
                    <div className="h-42 w-3/5 bg-blue-500"/>
                </div>
            </header>


            <article>
                <section>

                </section>
            </article>
            {/* Menu content goes here */}
        </main>
    );
}