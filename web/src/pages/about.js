import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { contactInformations } from '../components/typography.module.css'
import { contactInformationsTitle } from '../components/typography.module.css'
import { bioInformations } from '../components/typography.module.css'
import { blockAbout } from '../components/typography.module.css'
import { bioBlock } from '../components/typography.module.css'


export const query = graphql`
  query ArchivePageQuery {
    projects: allSanityProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={contactInformationsTitle}><b>Work</b></h1>
        <div class={blockAbout}>
          <h2 className={contactInformations}>
            dubosque.contact@gmail.com {<br />}
            {<a title="instagram_account" href="https://www.instagram.com/lucas.dubosque/">@lucas.dubosque</a>}{<br />}
            0644293670{<br />}
          </h2>
        </div>
        <div className={bioBlock}>
          <p className={bioInformations}>
            Piciistectes rectend elibererciam niatus voluptatquo que labori
            repre etur, voluptatur? Ignis ut odic te excesti ssimus explignihil
            molorup taectur, cullo mo de cus quo eossect iorehent.
            Torem harum arum con rem nimus dolupti quiasperum hiliquid
            mil elis es ea vent, conessim etur? Ullat es aut et occate si omnis
            dita debis mos molor andit, ent, cum et quae vero test, si inctur,
            cus, quae porati aut expla dollut voloratio consequias autamus
            que esequiatur sitecate pa qui doluptatus.
            Facimolorem que cum acilige nducien temporendes et iliquo
            coreicab ipiders peribusandae dolorem nonecup
        </p>
        </div>
      </Container>
    </Layout>
  )
}

export default ArchivePage
