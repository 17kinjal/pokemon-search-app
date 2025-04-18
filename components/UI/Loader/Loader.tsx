import React, { CSSProperties, FC } from 'react';
import { BeatLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '$color$mangoPale',
  width: 'fit-content',
};

interface Props {
  loading: boolean;
}

const Loader: FC<Props> = ({ loading }) => {
  return (
    <BeatLoader
      color="orange"
      loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
