import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesPixel6 as seriesData } from 'store/state';

export default function SeriesCanITakeAPictureForYou() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}

