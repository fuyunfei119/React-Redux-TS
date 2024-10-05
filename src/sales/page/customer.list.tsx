import { Fragment } from "react/jsx-runtime";
import { ActionBar } from "../component/action";
import { CustomerListContent } from "../component/customerList";
import { CustomerHeader } from "../component/header";
import { NavigatorHeader } from "../component/navigator";

export function CustomerList(): JSX.Element {
    return (
        <Fragment>
            <CustomerHeader></CustomerHeader>
            <NavigatorHeader></NavigatorHeader>
            <ActionBar></ActionBar>
            <CustomerListContent></CustomerListContent>
        </Fragment>
    );
}