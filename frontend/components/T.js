import styled from 'styled-components';
import Image from 'next/image';

const Img = styled.div`
  max-width: 900px;
`;

export default function T({ test }) {
  return (
    <div>
      <p>{test?.message}</p>
      <p>{test?.id}</p>
      {test?.image && (
        <Image
          src={test?.image?.url}
          alt={test?.image?.id}
          width={800}
          height={500}
        />
      )}
      <Img>
        {test?.photo && (
          <Image
            src={test?.photo?.url}
            alt={test?.photo?.id}
            width={800}
            height={500}
            layout="responsive"
          />
        )}
      </Img>
    </div>
  );
}
