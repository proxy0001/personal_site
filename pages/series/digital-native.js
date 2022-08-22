import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesDigitalNative as seriesData } from 'store/state';

export default function SeriesViewpoints() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
