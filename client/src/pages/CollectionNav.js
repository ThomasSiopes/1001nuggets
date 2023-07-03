import React from "react";
import { useQuery } from "@apollo/client";
// import { MetaTags } from "react-meta-tags";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import { QUERY_COLLECTION_ALL } from "../utils/queries";

function Collections() {
    let { loading, data } = useQuery(QUERY_COLLECTION_ALL);

    if(loading) return <span>Loading...</span>

    let collectionList = data.collections;
    
    return (
        <Container>
            {/* <MetaTags>
                <title>1001 Nuggets - Collections</title>
            </MetaTags> */}
            <Card>
                <Card.Header>Home {`>`} Collections</Card.Header>
                <Card.Body>
                    <Row>
                        {collectionList.map((index) => (
                            <Col xs={12} sm={6} md={4} className="mb-3" key={index.name}>
                                <Button variant={"theme"} className="btn-block py-5" href={`/collection/${index.realID}`}>{index.name}</Button>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Collections;