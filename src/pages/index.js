import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import ProjectRow from '../components/ProjectRow';
import ProjectRow2 from '../components/ProjectRow2';
import FullProjectRow from '../components/FullProjectRow';
import LandingImage from '../images/LandingImage.jpg';
import HeadingWrap from '../components/HeadingWrap';
import '../index.css';

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SkillTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        color: black;
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        span {
            font-size: 20px;
            margin-right: 5px;
            color: #b4e1e7;
        }
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;

const HeadingImage = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    width: 100%;
    border-radius: 4px;
    height: 300px;
    background-size: cover;
    background-image: url(${LandingImage});
    background-color: #f5f5f5;
    background-position: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        height: 400px;
        background-position-x: right;
        background-position-y: center;
    }
`;

const SubParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`
    #     #      #######                             ### 
    #     # #       #    #    # ###### #####  ###### ### 
    #     # #       #    #    # #      #    # #      ### 
    ####### #       #    ###### #####  #    # #####   #  
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #      ### 
    #     # #       #    #    # ###### #    # ###### ### `);
        console.log('This website was designed and built by Julia Johnson ');
    }

    render() {
        return (
            <>
                <Layout>
                    <Link title='Home - Julia Johnson' to='/'>
                        <Logo />
                    </Link>
                    <Helmet>
                        <title>
                            Julia Johnson - Front End Developer - JuliaCodes
                        </title>
                        <meta
                            name='title'
                            content='Julia Johnson - Front End Developer - JuliaCodes'
                        />
                        <meta
                            name='description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:url'
                            content='https://juliacodes.com/'
                        />
                        <meta
                            property='og:title'
                            content='Julia Johnson - Front End Developer - JuliaCodes'
                        />
                        <meta
                            property='og:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:image' content={LandingImage} />
                        <meta
                            property='twitter:card'
                            content='summary_large_image'
                        />
                        <meta
                            property='twitter:url'
                            content='https://juliacodes.com/'
                        />
                        <meta
                            property='twitter:title'
                            content='Julia Johnson - Front End Developer - JuliaCodes'
                        />
                        <meta
                            property='twitter:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='twitter:image' content={LandingImage} />
                        <html lang='en' />
                    </Helmet>
                    <HeadingWrap />
                    <HeadingImage />
                    <Container
                        style={{
                            alignItems: 'start',
                            margin: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextContentWrap>
                            <Paragraph>
                                I'm a 20 year old student at Purdue University
                                currently studying web development and design.
                                <br />
                                <br />
                                As I've grown as a developer, I've worked
                                alongside senior designers and developers who
                                have raised my standards for whats expected of
                                any web application.
                            </Paragraph>
                        </TextContentWrap>
                        <TextContentWrap>
                            <Paragraph>
                                Through these experiences, I've had the
                                opportunity to create memorable products that
                                are not only enjoyable to use, but are written
                                in code thats maintainable and easy to
                                understand.
                            </Paragraph>
                        </TextContentWrap>
                    </Container>
                    <Container>
                        <SubContainer>
                            <SkillContent>
                                <TextContent>
                                    <Heading>My Skills</Heading>
                                    <Paragraph>
                                        Apart from the courses included in my
                                        degree, I've taken a number of online
                                        courses such as{' '}
                                        <a
                                            title='The Complete Javascript Course'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://www.udemy.com/the-complete-javascript-course/'
                                        >
                                            The Complete Javascript Course
                                        </a>
                                        ,{' '}
                                        <a
                                            title='Advanced CSS & Sass'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://www.udemy.com/advanced-css-and-sass/'
                                        >
                                            Advanced CSS & Sass
                                        </a>
                                        ,{' '}
                                        <a
                                            title='React: The Complete Guide'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://www.udemy.com/react-the-complete-guide-incl-redux/'
                                        >
                                            React: the Complete Guide
                                        </a>
                                        ,{' '}
                                        <a
                                            title='Javascript 30'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://javascript30.com/'
                                        >
                                            Javascript 30
                                        </a>
                                        , and I'm currently taking{' '}
                                        <a
                                            title='ES6 For Everyone'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://es6.io/'
                                        >
                                            ES6 for Everyone
                                        </a>
                                    </Paragraph>
                                </TextContent>
                                <SkillTable>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> HTML5
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> CSS3
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Javascript ES6
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> React
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> React Native
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span>{' '}
                                            Styled-Components
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Git
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> PHP & SQL
                                        </Paragraph>
                                    </row>
                                </SkillTable>
                            </SkillContent>
                        </SubContainer>
                    </Container>
                    <SubContainer>
                        <TextContent>
                            <Heading>What I've been working on </Heading>
                            <SubParagraph>
                                I like to stay busy and always have a project in
                                the works. Take a look at some of the
                                applications, articles and companies I've
                                dedicated my time to.
                            </SubParagraph>
                        </TextContent>
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow2 />
                    </SubContainer>
                    <SubContainer>
                        <FullProjectRow />
                    </SubContainer>
                </Layout>
                <Footer instagramDisplay='flex' />
            </>
        );
    }
}

export default Page;
