import React from 'react'

import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'

const LayoutIndex = ({ canonical, children }) => {
    const { title, description } = useSiteMetadata()

    return (
        <>
            <Global styles={css`
                /* --------------------------------------------- */
                /* ----- Basic Setup ----- */
                /* --------------------------------------------- */
    
                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }
    
                html {
                    font-size: 62.5%;
                }
    
                body {
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 1.6rem;
                    box-sizing: border-box;
                }
            `} />
            <Helmet>
                <meta lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {canonical ? <link rel="canonical" href={`https://www.typefox.io${canonical}`} /> : null}
            </Helmet>
            <>
                {children}
            </>
        </>
    )
}

export default LayoutIndex