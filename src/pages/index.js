import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Yacine" />
    <Header></Header>
    <About></About>
    <Work></Work>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
