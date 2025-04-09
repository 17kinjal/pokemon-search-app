import React, { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import Card from '../Card';
import { GenericItem, PokemonList } from '@/lib/types/pokemon';

interface Props {
  list: InfiniteData<PokemonList> | null;
  titleKey: keyof GenericItem;
  imgSrcKey: keyof GenericItem;
  imgAltKey: keyof GenericItem;
  linkPathKey: keyof GenericItem;
}

const ItemList: FC<Props> = ({
  list,
  imgSrcKey,
  titleKey,
  imgAltKey,
  linkPathKey,
}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center justify-center p-4">
      {list?.pages?.length && list?.pages?.map((page) =>
        (page?.results as GenericItem[])?.map((item) => {
          return (
            <Card
              key={item[titleKey] as string}
              size={'large'}
              imgSrc={item[imgSrcKey] as string}
              imgAlt={item[imgAltKey] as string}
              title={item[titleKey] as string}
              linkPath={item[linkPathKey] as string}
            />
          )
        }
        )
      )}
    </div>
  );
};

export default ItemList;