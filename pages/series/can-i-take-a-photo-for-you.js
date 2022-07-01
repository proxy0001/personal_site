import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesCanITakeAPhotoForYou as seriesData } from 'store/state';

export default function SeriesCanITakeAPhotoForYou() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
