import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
// import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";
import TopicButton from "../components/TopicButton";

import { QUERY_COLLECTION_REALID } from "../utils/queries";

function Collection () {
    const { collectionRealId } = useParams();
    let {loading, data} = useQuery(QUERY_COLLECTION_REALID, {
        variables: {collectionRealId: collectionRealId},
    });

    if(!collectionRealId || collectionRealId === null || collectionRealId === "undefined") return (<Redirect to={`/topics`}/>);

    if(loading) return <p>Loading...</p>

    if(!data) return (<Redirect to={`/404error`}/>);

    const collection = data.collectionR
    let topicList = []
    for(let n = 0; n < collection.topics.length; ++n) {
        if(n === 0 || (n > 0 && collection.topics[n].charAt(0) !== collection.topics[n-1].charAt(0))) topicList.push({"name":collection.topics[n], "firstLetter":true})
        else topicList.push({"name":collection.topics[n], "firstLetter":false})
    }

    return (
        <Container>
            {/* <MetaTags>
                <title>1001 Nuggets - {collection.name}</title>
            </MetaTags> */}
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        <Card.Header>Home {`>`} <Link to={`/collections`} className="link-theme">Collections</Link> {`>`} {collection.name}</Card.Header>
                        <Card.Body>
                            <Row id="myGroup">
                                {topicList.map((index) => (
                                    <Col xs={12} key={index.name} className="text-center mb-2">
                                        {index.firstLetter &&
                                            <div>
                                                <strong><p id={index.name.charAt(0)}>{index.name.charAt(0)}</p></strong>
                                                <hr/>
                                            </div>
                                        }
                                        <strong><TopicButton type={"link"} name={index.name} theme={"theme"}/></strong>
                                        <hr/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-3 ms-0 align-items-center justify-content-center">
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#A" className="text-white">A</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#B" className="text-white">B</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#C" className="text-white">C</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#D" className="text-white">D</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#E" className="text-white">E</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#F" className="text-white">F</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#G" className="text-white">G</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#H" className="text-white">H</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#I" className="text-white">I</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#J" className="text-white">J</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#K" className="text-white">K</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#L" className="text-white">L</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#M" className="text-white">M</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#N" className="text-white">N</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#O" className="text-white">O</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#P" className="text-white">P</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Q" className="text-white">Q</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#R" className="text-white">R</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#S" className="text-white">S</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#T" className="text-white">T</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#U" className="text-white">U</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#V" className="text-white">V</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#W" className="text-white">W</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#X" className="text-white">X</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Y" className="text-white">Y</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Z" className="text-white">Z</a></div>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default Collection;