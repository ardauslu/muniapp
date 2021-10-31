import { Container, Navbar,Table } from "react-bootstrap"
import Header from "../header/header"
import CurrencyTable from "./currencyTable"


function MainPage({ user }) {

    return <>
        <Header user={user} />
        <CurrencyTable user={user} />
    </>
}

export default MainPage