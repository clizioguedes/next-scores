import LeaguesList from '@/app/leagues/leagues-list';
import { getLeagues } from '@/services/requests/leagues';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/react-query';

export default async function Leagues() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['leagues'], getLeagues);
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <LeaguesList />;
    </Hydrate>
  );
}
