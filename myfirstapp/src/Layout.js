import Header from './Header';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <Outlet />
                    </div>
                    <div className="col border border-primary">SideBar</div>
                </div>
                <div className="row">
                    <div className="col border"></div>
                </div>
            </div>
        </>
    );
}