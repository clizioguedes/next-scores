'use client';

import { getLeagues } from '@/services/requests/leagues';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

export default function LeaguesList() {
  const { data } = useQuery({
    queryKey: ['leagues'],
    queryFn: () => getLeagues(),
  });

  return (
    <main>
      <aside className="flex flex-wrap m-4">
        {data?.map((item) => {
          return (
            <div
              key={item.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2 p-2 bg-white"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <Image
                      width={80}
                      height={40}
                      src={item.emblem}
                      alt="Emblem Home Team"
                    />
                  </div>

                  <div className="px-6 py-4 flex flex-col items-center justify-center">
                    <div className="text-center font-bold text-md mb-2">
                      {item.name}
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <Link
                        href={`/leagues/${item.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </aside>
    </main>
  );
}
