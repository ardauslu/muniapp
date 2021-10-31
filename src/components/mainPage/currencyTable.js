import { useEffect, useState } from "react";
import { Container, Navbar, Table, Button } from "react-bootstrap"
import CalculationModal from "./calculationModal";


function CurrencyTable({ user }) {

    const [modalShow, setModalShow] = useState(false);
    const [wallet, setWallet] = useState({})
    const [updateDate, setUpdateDate] = useState(new Date())
    const [currency, setCurrency] = useState(null)
    const [buying, setBuying] = useState(true)
    const [selectedCurrency, setSelectedCurrency] = useState(null)

    useEffect(() => {
        calculateWallet()

        const interval = setInterval(() => {
            calculateWallet()
        }, 120000);
        return () => clearInterval(interval);
    }, [])

    function calculateWallet() {
        let obj = {}
        fetch("https://v6.exchangerate-api.com/v6/8b67d7e8c85e011289f00508/latest/USD")
            .then(async res => await res.json())
            .then(res => {
                console.log(wallet)
                Object.entries(user.total).forEach(([key, value], i) => {
                    obj[key] = { amount: value, usd: value * res.conversion_rates[key] }
                })
                setWallet(obj)
                setUpdateDate(new Date())
            }).catch(err => console.log(err))
    }

    return <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Para Birimi</th>
                    <th>Seç</th>
                    <th>Al</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(wallet).map(([key, value], i) => {
                    return <tr>
                        <td>{i + 1}</td>
                        <td>{key + ' ' + value.amount + ' ' + value.usd}</td>
                        <td>
                            <Button variant="outline-primary"
                                onClick={() => {
                                    setSelectedCurrency(key)
                                }}
                                disabled={selectedCurrency === key}>
                                SEÇ
                            </Button>
                        </td>
                        <td>
                            <Button variant="outline-primary"
                                onClick={() => {
                                    setCurrency(key)
                                    setBuying(true)
                                    setModalShow(true)
                                }}
                                disabled={!selectedCurrency || selectedCurrency === key}>
                                AL
                            </Button>
                        </td>
                        <td>
                            <Button variant="outline-primary"
                                onClick={() => {
                                    setCurrency(key)
                                    setBuying(false)
                                    setModalShow(true)
                                }}
                                disabled={!selectedCurrency || selectedCurrency === key}>
                                SAT
                            </Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
        <div>{updateDate.toString()}</div>
        <CalculationModal
            show={modalShow}
            selectedCurrency={selectedCurrency}
            currency={currency}
            buying={buying}
            onHide={() => setModalShow(false)}
        />
    </>
}

export default CurrencyTable