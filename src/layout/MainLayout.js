import React from 'react';
import Footer from '../components/footer';

const MainLayout = ({children}) => {
    return (
        <div>
            <header>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
