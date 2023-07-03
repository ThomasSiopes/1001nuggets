import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";
// import MetaTags from "react-meta-tags";

// import Results from "../components/Results";
import ResultsQuote from "../components/ResultsQuote";

function SearchResults() {
    const { query } = useParams();

    if(!query || query === null || query === "undefined") return (<Redirect to={`/`}/>);
    
    return (
        <Container className="auttopBody">
            <div className="wrapper">
                {/* <MetaTags>
                    <title>1001 Nuggets - {query}</title>
                </MetaTags> */}
            </div>
            <Card>
                {/* <Card.Header><Link to={`/`} className="link-theme">Home</Link> {`>`} Search Results for "{query}"</Card.Header> */}
                <Card.Body>
                    {/* <Results type="author" input={query}></Results>
                    <Results type="topic" input={query}></Results> */}
                    <ResultsQuote input={query}></ResultsQuote>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResults;