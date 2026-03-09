import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
    <footer className="bg-white py-12 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
                <Link to="/" className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm">CM</Link>
                <span className="font-display font-bold text-xl tracking-tight text-gray-900">College Mentor</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 College Mentor. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
