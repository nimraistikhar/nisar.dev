import React from 'react'

import IndexLayout from './index'
import Nav from '../components/Nav'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { sizes, borders, shadows } from '../styles/variables'

const StyledBlogLayout = styled.div`
    margin: 7rem 0;

    .row {
        max-width: ${sizes.grid.wrapperWidth};
    }

    .container {
        background: var(--white);
        box-shadow: ${shadows.light};
        border: ${borders.light1};
        padding: 5rem 3rem;
    }

    .date {
        margin-bottom: 3rem;
    }

    h1 {
        margin-bottom: 3rem;
    }

    blockquote {
        margin: 3rem 0;
        padding: .5rem 1.5rem; 
        background: var(--offWhite);
        font-size: 90%;
        border: 1px solid #eee;
        border-left: ${borders.light};
    }

    img, video {
        max-width: 100%;
    }

    video {
        display: block;
        margin: 3rem 0;
        box-shadow: ${shadows.light2};
    }

    .back {
        padding: 5rem 0;
    }
`


const BlogLayout = ({ canonical, externalCanonical, children, pageTitle }) => (
    <IndexLayout canonical={canonical} externalCanonical={externalCanonical} pageTitle={pageTitle} pageColor={'var(--offWhite)'}>
        <StyledBlogLayout>
            <div className="container row">
                {children}
            </div>
            <div className="row">
                <div class="back">
                    <Link to="/blog">Go Back &nbsp;&rarr;</Link>
                </div>
            </div>
        </StyledBlogLayout>
    </IndexLayout>
)

export default BlogLayout