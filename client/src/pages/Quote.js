import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";
import Auth from "../utils/auth";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";
import MoreAuthor from "../components/MoreAuthor";
import Bookmarker from "../components/Bookmarker";
import SimilarTopics from "../components/SimilarTopics";

import { QUERY_QUOTE_REALID } from "../utils/queries";
import auth from "../utils/auth";

function Quote () {
    const { quoteRealId } = useParams();
    let { loading, data } = useQuery(QUERY_QUOTE_REALID, {
        variables: {quoteRealId: quoteRealId},
    })

    if(!quoteRealId || quoteRealId === null || quoteRealId === "undefined") return (<Redirect to={`/`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const quote = data.quoteR;

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - {quote.author} - {quote.quoteText}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link to={`/`} className="link-theme">Home</Link> {`>`} <Link to={`/authors`} className="link-theme">Authors</Link> {`>`} <AuthorButton type={"link"} name={quote.author}/> {`>`} Quotes</Card.Header>
                <Card.Body>
                    {Auth.loggedIn() && <Bookmarker input={quote}/>}
                    <Row>
                        <Col xs={12}>
                            <Card className="mb-3">
                                <div id="quote-page">
                                    <Card.Body>
                                        <Card.Text className="display-6"><span className="quote-body font-poppins" id="main-quote">{quote.quoteText}</span></Card.Text>
                                        <Card.Text><strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
                                    </Card.Body>
                                    <Card.Body className="text-center">
                                        <a className="mx-2 share-button" href={`https://twitter.com/intent/tweet?url=${window.location.href}`} id="share-twitter"><FaTwitter/></a>
                                        <a className="mx-2 share-button" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} id="share-facebook"><FaFacebookF/></a>
                                    </Card.Body>
                                </div>
                                {quote.topics.length !== 0 && 
                                    <Card.Footer className="text-center py-3">
                                            {quote.topics.map((index) => (
                                                <TopicButton key={index} type={"button"} name={index}/>
                                            ))}
                                    </Card.Footer>
                                }
                            </Card>
                        </Col>
                        {/* <Col xs={12}>
                            <Row>
                                <MoreAuthor parent={quote} name={quote.author}/>
                                {quote.topics[0] &&
                                <Col xs={12} md={6} className="mb-3">
                                    <Card className="text-center">
                                        <Card.Header>Similar Topics</Card.Header>
                                        <Card.Body>
                                            <SimilarTopics thisTopic={quote.topics[0]}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                }
                            </Row>
                        </Col> */}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Quote;