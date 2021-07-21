import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AddTicketForm from '../../components/AddTicketForm/AddTicketForm'
import PageBreadcrumb from '../../components/PageBreadcrumb/PageBreadcrumb'
import Swal from 'sweetalert2'
// import { subjectValidator } from '../../assets/utils/validation'

const initialFormData = {
    subject: "",
    issueDate: "",
    details: "",
}

// const initialFormError = {
//     subject: false,
//     issueDate: false,
//     details: false,
// }


export default function AddTicket() {

    const [formData, setFormData] = useState(initialFormData);
    // const [formError, setFormError] = useState(initialFormError);

    useEffect(() => { }, [formData])
    // formError
    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })

        console.log(name, value)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // setFormError(formError)

        // const isSubjectValid = await subjectValidator(formData.subject);

        // setFormError({
        //     ...initialFormError,
        //     subject: !isSubjectValid,
        // })

        Swal.fire({
            icon: 'success',
            title: 'TICKET AGREGADO',
            text: `TITULO: ${JSON.stringify(formData.subject)}`,
            timer: 2000,
        })
    }

    // 

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Nuevo Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formData={formData} />
                </Col>
            </Row>
        </Container>
    )
}

/*formError={formError}*/
