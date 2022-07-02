import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesPreviousWorks as seriesData } from 'store/state';

export default function SeriesPreviousWorks() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
