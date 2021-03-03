import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>Nitin Verma</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
        <a href="https://ieeexplore.ieee.org/document/9242551"><header className="major">
          <section>
          <h3>PUBLICATIONS :</h3>
          <h5>Nitin Verma, Shrinivas Desai, Puneet Gupta, Sharan, Ramya and Shantala Giraddi. “Breast Cancer Detection Using GAN for Limited Labeled Dataset.” 12th International Conference on Computational Intelligence and Communication Networks (CICN 2020).</h5>
          </section>
          <hr></hr>
          </header></a>
          <section>
          <h3>CERTIFICATIONS</h3>
          <ul>
            <a  href="https://jovian.ai/certificate/MFQTINBTHE"><li>2020 Deep Learning with Pytorch: Zero to GANs</li></a>
           <a href="https://jovian.ml/certificate/MFQTGMBZHA"><li >2020 Data Analysis with Python: Zero to Pandas</li></a>
           <a href="https://www.coursera.org/account/accomplishments/certificate/LCVEA7ZMU7WR"><li > 2020 Structuring Machine Learning Projects</li></a>
           <a href="https://courses.skillsnet.simplilearn.com/certificates/0e2dcc13ee064c76a6e940f6ca25bf4c"> <li >2020 Python 101 for Data Science</li></a>
           <a href="https://www.coursera.org/account/accomplishments/certificate/5H8LHM5YZK35"> <li >2020 Generate Synthetic Images with DCGANs in Keras</li></a>
            <a href="https://drive.google.com/file/d/0B_wwFIwtZouxaXM1TmljcFkzNXJ2YVlnTE9HVzRBMXRiLURj/view?usp=sharing"><li >2019 Microsoft Technology Associate for Programming in Python</li></a>
            <a href="https://drive.google.com/file/d/0B_wwFIwtZouxSUJUYlpoYkJBTC05bGNibFBmWEZOU0dEakY0/view?usp=sharing"><li >2018 Problem Solving Through Programming in C by NPTEL</li></a>
          </ul>
          </section>
          <hr></hr>
          <section>
          <h3>SKILLS</h3>
             <ul>
               <li>C, C++, Python
               </li>
               <li>SQL</li>
               <li>Data Structures</li>
               <li>Machine Learning</li>
             </ul>
             </section>
          <ul className="actions">
            <li>
              <a href="#three" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Feel Free to Mail me any Time 
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:nitin993005@gmail.com">nitin993005@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
