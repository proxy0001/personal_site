import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesExercises as seriesData } from 'store/state';

export default function SeriesExercises() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
