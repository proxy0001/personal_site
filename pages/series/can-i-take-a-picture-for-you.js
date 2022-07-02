import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesCanITakeAPictureForYou as seriesData } from 'store/state';

export default function SeriesCanITakeAPictureForYou() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}

