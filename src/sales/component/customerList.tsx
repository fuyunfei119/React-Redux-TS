import { Fragment } from "react/jsx-runtime";
import { RootState, useAppSelector } from "../store/customer.store";
import { customer, fields } from "../modul/customer.modul";
import "../style/content.css";

export function CustomerListContent(): JSX.Element {

    const customerList = useAppSelector((state: RootState) => state.customers.customers);

    function renderCustomerFields(): JSX.Element {
        return (
            <tr>
                {Object.keys(fields)
                    .filter((field) => isNaN(Number(field)))
                    .map((field) =>
                    (
                        <th key={field}>
                            {field}
                        </th>
                    ))
                }
            </tr>
        );
    }

    function renderCustomerList(customerList: Array<customer>): JSX.Element[] {
        return customerList.map((customer) => (
            <tr key={customer.id}>
                {Object.values(customer).map((value, index) => (
                    <td key={index}>
                        {value}
                    </td>
                ))}
            </tr>
        ));
    }

    return (
        <Fragment>
            <div className="container">
                <div className="inner-container">
                    <table className="expand-table">
                        <thead>
                            {renderCustomerFields()}
                        </thead>
                        <tbody>
                            {renderCustomerList(customerList)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}