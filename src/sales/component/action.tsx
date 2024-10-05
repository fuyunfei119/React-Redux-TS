import { Fragment } from "react/jsx-runtime";
import { action } from "../modul/action.modul";
import { useAppSelector } from "../store/customer.store";
import "../style/action.css";

export function ActionBar(): JSX.Element {
    const actionList = useAppSelector((state) => state.actions.actions);

    function renderActionList(actionList: Array<action>): JSX.Element[] {
        return actionList.map((action) => (
            <div className="buttons-action" key={action.name}>
                <a href="#">{action.name}</a>
            </div>
        ));
    }

    return (
        <Fragment>
            <div className="container-action">

                <span className="table-name">
                    Customer List
                </span>

                {renderActionList(actionList)}
            </div>
        </Fragment>
    );
}