import React from 'react'

import styled from '@emotion/styled'
import { shadows, borders, sizes } from '../styles/variables'
import { Link } from 'gatsby'

const StyledPost = styled.article`
    display: flex;
    background: var(--white);
    box-shadow: ${shadows.light};

    @media(max-width: ${sizes.breakpoints.lgm}) {
        flex-direction: column;
        max-width: 40rem;
    }

    .img {
        flex: 0 0 35%;

        @media(max-width: ${sizes.breakpoints.lgm}) {
            min-height: 30rem;
        }
    }

    .text {
        padding: 4rem 2.5rem;
        font-size: 2.1rem;
        border: ${borders.light1};
    }

    h3 {
        color: var(--darkGrey);
        margin-bottom: var(--gutter-small);
    }

    p {
        line-height: 1.4;
        margin: var(--gutter-small) 0;
    }

    .btn {
        color: var(--white);
    }

`

const Post = ({title, date, image, excerpt, slug}) => (
    <Link to={`/blog/${slug}/`}>
        <StyledPost className="post">
            <div 
                className="img" 
                aria-hidden="true"
                style={{
                    backgroundImage: `url(/${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >&nbsp;</div>
            <div className="text">
                <h3>{title}</h3>
                <p>{(new Date(date)).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                <p>{excerpt}</p>
                <Link to={`/blog/${slug}/`} className="btn btn--small btn--dark">Read More &nbsp;&rarr;</Link>
            </div>
        </StyledPost>
    </Link>
)

export default Post