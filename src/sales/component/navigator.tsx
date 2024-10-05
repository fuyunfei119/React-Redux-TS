import { Fragment } from "react/jsx-runtime";
import { navigation } from "../modul/navigation.modul";
import { RootState, useAppSelector } from "../store/customer.store";
import "../style/navigator.css";

export function NavigatorHeader(): JSX.Element {
    const navigationList = useAppSelector((state: RootState) => state.navigations.navigations);

    function renderNavigationList(navigationList: Array<navigation>): JSX.Element[] {
        return navigationList.map((navigation) => (
            <div className="dropdown" key={navigation.name}>
                <a href="#">{navigation.name}</a>
            </div>
        ))
    }

    return (
        <Fragment>
            <div className="container-navigator">
                <span className="company-name">
                    <h3>Sievers-Group AG |</h3>
                </span>

                <div className="buttons-navigator">
                    {renderNavigationList(navigationList)}
                </div>
            </div>
        </Fragment>
    );
}