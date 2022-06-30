import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesInTheRoom as seriesData } from 'store/state';

export default function InTheRoom() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
