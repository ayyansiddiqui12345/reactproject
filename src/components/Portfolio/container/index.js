import React from 'react'

import Col from 'react-bootstrap/Col';

import { ContainerComponent1 } from './index1'
import { ContainerComponent2 } from './index2'
import { ContainerComponent3 } from './index3'
import { ContainerComponent4 } from './index4'
import { ContainerComponent5 } from './index5'
import { ContainerComponent6 } from './index6'
import { Row } from 'react-bootstrap'

export const ContainerComponent = () => {
  return (
    <div>
    <br />
    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
      Portfolio
    </h2>
      {/* Icon Divider*/}
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40" 
          viewBox="0 0 16 16"
          style={{
            marginLeft: '48%',
            color: '#2c3e50',
            marginBottom: '40px',
            marginTop: '30px',
          }}
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
    <Row>
      {/* First Row */}
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent1 />
      </Col>
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent2 />
      </Col>
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent3 />
      </Col>

      {/* Second Row */}
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent4 />
      </Col>
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent5 />
      </Col>
      <Col lg={4} sm={12} md={6}>
        <ContainerComponent6 />
      </Col>
    </Row>
    </div>
  )
}
