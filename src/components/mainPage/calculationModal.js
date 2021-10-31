import { Modal, Button, FormControl } from "react-bootstrap";

export default function CalculationModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Seçilen Döviz {props.selectedCurrency}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>{props.currency}</h1>
                <FormControl />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={props.onHide}>Close</Button>
                <Button variant="outline-primary" onClick={props.onHide}>{props.buying?'AL':'SAT'}</Button>
            </Modal.Footer>
        </Modal>
    );
}