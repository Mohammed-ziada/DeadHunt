import { Button, Col, Row, Typography } from 'antd';



export default function Address() {
    const { Title } = Typography;
    return (
        <>
            <Row className="p-4 m-4 border rounded-lg relative">
                <Col xs={24} md={24} className="p-4 flex justify-between ">
                    <Title level={4}>
                        Shipping Address
                    </Title>
                    <Button>asdasdads</Button>

                </Col>
                <Col xs={24} md={24} className="p-4">
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            asdasdas
                        </Col>
                    </Row>

                </Col>
            </Row>

        </>
    )
}
