import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'
import RadialGauge from '../dashboard/GaugeChart'

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className="mb-4" style={{ marginBottom: 12 }}>
      <CCol sm={6} lg={3}>
        <RadialGauge value={85} min={0} max={100} title={'Math'} color={'#2e89ff'} />
      </CCol>
      <CCol sm={6} lg={3}>
        <RadialGauge value={85} min={0} max={100} title={'English'} color={'orange'} />
      </CCol>
      <CCol sm={6} lg={3}>
        <RadialGauge value={85} min={0} max={100} title={'Arts'} color={'purple'} />
      </CCol>

      <CCol sm={6} lg={3}>
        <RadialGauge value={85} min={0} max={100} title={'Science'} color={'aqua'} />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
