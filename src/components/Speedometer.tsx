import { FC } from 'react'

interface OdometerProps {
  value: number
}

const Speedometer: FC<OdometerProps> = ({ value }) => (
    <h1>{value}</h1>
  )

export default Speedometer
