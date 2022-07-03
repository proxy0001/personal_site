import LayoutSeriesPage from 'components/layout-series-page';
import { env, seriesPortfolioFrom2015To2017 as seriesData } from 'store/state';

export default function SeriesPortfolioFrom2015To2017() {
  return (
    <LayoutSeriesPage {...seriesData} url={env.url} />
  )
}
