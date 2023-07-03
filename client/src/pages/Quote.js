import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
// import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";

import { QUERY_QUOTE_REALID } from "../utils/queries";

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
            {/* <MetaTags>
                <title>1001 Nuggets - {quote.author} - {quote.quoteText}</title>
            </MetaTags> */}
            <Card>
                <Card.Header>Home {`>`} Authors {`>`} <AuthorButton type={"link"} name={quote.author}/> {`>`} Quotes</Card.Header>
                <Card.Body>
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
                                                <TopicButton key={index} type={"button"} theme={"theme"} name={index}/>
                                            ))}
                                    </Card.Footer>
                                }
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Quote;