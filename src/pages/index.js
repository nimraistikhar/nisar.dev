import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/Banner'
import styled from '@emotion/styled'
import { sizes, colors, borders } from '../styles/variables'
import TrustedBy from '../components/home/TrustedBy'
import Craft from '../components/home/Craft'

const StyledIndexPage = styled.div`
    .hack {
        @media(max-width: 912px) {
            display: none;
        }
    }

    section {
        border-top: ${borders.light};

        .btn {
            margin-top: 2rem;
        }

        &:nth-of-type(2n + 2) {
            background: ${colors.offWhite};
        }
    }
` 

const IndexPage = () => (
    <IndexLayout canonical="/">
        <StyledIndexPage>
            <Banner />

            {/* ----- About ----- */}

            <section>
                <div className="row">
                    <div className="wrapper">
                        <h2 className="heading--underlined">About Me</h2>
                        <p>
                            I am a self-taught front end developer and interface designer from Pakistan.<span className="hack">&nbsp;&nbsp;&nbsp;</span> I was always curious about computers when I was a child I got introduced to programming in school. I dropped out from universty at the age of 18 with the grand plans of becoming a great computer scientist. I started my career as a front end web developer in 2019. I currently work for <a href="https://typefox.io" target="_blank">TypeFox</a> as a freelancer where entirety of the work i do is open source. These days I'm focusing on making <a href="https://theia-ide.org" target="_blank">Theia</a>(Cloud & Desktop IDE) accessible and great to use on tablets.
                        </p>
                    </div>
                </div>
            </section>

        {/* ----- My Craft ----- */}

        <Craft />
            

        {/* ----- Trusted By ----- */}

        <TrustedBy />

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage