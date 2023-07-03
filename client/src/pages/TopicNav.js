import React from "react";
// import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";
import TopicNavInst from "../components/TopicNavInst";

function Topics () {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const searchFunction = () => {
        let input, filter, group, elements, body, textValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByClassName("col-12")

        for(let i = 0; i < elements.length; ++i) {
            body = elements[i].getElementsByTagName("a")[0];
            textValue = body.textContent || body.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display="";
            else elements[i].style.display="none";
        }
    }

    return (
        <Container>
            {/* <MetaTags>
                <title>1001 Nuggets - Topics</title>
            </MetaTags> */}
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="d-none d-md-block">
                                <Col><input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for topic names..." className="mb-3"/></Col>
                            </Row>
                            <Row id="myGroup">
                                {alphabet.map((index) => (
                                    <TopicNavInst key={index} letter={index}/>
                                ))
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-3 ms-0 align-items-center justify-content-center">
                        {alphabet.map((fitterIndex) => (
                            <div className="p-0 mx-0 float-left sidebar-text" key={"fitter" + fitterIndex}><a href={"#" + fitterIndex} className="text-white">{fitterIndex}</a></div>
                        ))
                        }
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Topics;