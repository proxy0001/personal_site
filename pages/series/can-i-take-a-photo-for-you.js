import LayoutSeriesPage from 'components/layout-series-page';
import { seriesCanITakeAPhotoForYou as seriesData } from 'store/series';

export default function InTheRoom() {
  return (
    <LayoutSeriesPage {...seriesData}/>
  )
}
