import LayoutSeriesPage from 'components/layout-series-page';
import { seriesInTheRoom as seriesData } from 'store/series';

export default function InTheRoom() {
  return (
    <LayoutSeriesPage {...seriesData}/>
  )
}
