export default function Footer() {
    return (
        <footer className="bottom-0 w-full
         bg-[#f4e3db] text-center py-4 mt-8">
            <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Nest Restaurant. All rights reserved.
            </p>
        </footer>
    );
}