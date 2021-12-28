import React from 'react'
import Bankgal from '../components/Bankgal'
import Szatmargal from '../components/Szatmargal'
import Hoszigetelesgal from '../components/Hoszigetelesgal'
import Retkerulogal from '../components/Retkerulogal'
import Retkozgal from '../components/Retkozgal'
import Tomorigal from '../components/Tomorigal'

export default () => (
  <div className="galleryContainer">
  <Szatmargal />
  <Hoszigetelesgal />
  <Bankgal />
  <Retkerulogal />
  <Retkozgal />
  <Tomorigal />
  </div>
)
