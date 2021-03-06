import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Posts from '../components/posts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
  </Layout>
)

export default IndexPage
