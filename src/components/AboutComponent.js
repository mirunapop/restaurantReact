import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade, FadeTransform } from 'react-animation-components';

const imgStyle={
    maxHeight: 128,
    maxWidth:128
}

function RenderLeader({leaders, isLoading, errMess}) {
    if(isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <div>
                <Stagger in>
                {leaders.map((leader) => {
                return(
                    <FadeTransform in 
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }} >
                        <Media tag ="li" key={leader.id}>
                            <Media left middle>
                                <Media object src={baseUrl + leader.image} alt={leader.name} style={imgStyle}/>
                            </Media>
                
                            <Media body className="ml-5">
                                <Media heading>{leader.name}</Media>
                                <p>{leader.designation}</p>
                                <p>{leader.description}</p>
                                <br />
                            </Media>
                        </Media>
                    </FadeTransform>

                );
            })}
                </Stagger>
            </div>
        );
}

function About(props) {
    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2015, Alberto Ristorante Italiano quickly established itself as a culinary icon par excellence in New York. With its unique brand of italian fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in New York.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Chef's Food</em>, a successful chain started by our CEO, Ms. Cristina Rodriguez, that featured for the first time an italian restaurant with spanish influences. </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">23 Sep. 2015</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">NY Italian Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                    <RenderLeader leaders={props.leaders}
                    isLoading={props.leadersLoading}
                    errMess={props.leadersErrMess} />
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    