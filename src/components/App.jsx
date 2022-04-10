import '../styles/_app.scss';

import TopNav from './TopNav';
import MenuBar from './MenuBar';
import MenuContent from './MenuContent';

function App() {
    return (
        <>
            <TopNav></TopNav>
            <MenuBar></MenuBar>
            <main className="app-body">
                <MenuContent></MenuContent>
            </main>
        </>
    );
}

export default App;
