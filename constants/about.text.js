import Image from 'next/image';

export const items = [
  {
    title: 'Innovation',
    description:
      'At Nirmaan, we are on an unending journey to redefine innovation, continually pushing the boundaries day in, day out, to create a brighter future.',
    header: (
      <Image
        src="https://utfs.io/f/O1Z0nCiJ5QIDbPAFpKd0CVzKOTgLQJtc8He7XaBDYhP49M5f"
        alt="headset"
        className="flex flex-1 w-full h-1/2 object-cover"
        width={500} // Replace with the appropriate width
        height={250} // Replace with the appropriate height
      />
    ),
  },
  {
    title: 'Engineering',
    description:
      'As a group of dedicated engineers, we are firmly grounded in the relentless pursuit of excellence through top-tier engineering principles.',
    header: (
      <Image
        src="https://utfs.io/f/O1Z0nCiJ5QIDS9CBvUORq7mkC2DsEa8pM1UvcOTnrFldogLG"
        alt="headset"
        className="flex flex-1 w-full h-1/2 object-cover"
        width={500} // Replace with the appropriate width
        height={250} // Replace with the appropriate height
      />
    ),
  },
  {
    title: 'At Nirmaan, we Redefine Innovation.',
    description:
      'We at, Nirmaan Hyperloop, aim to develop and innovate new modes of transport. Founded in 2018, now a team of 40 creative minds from various engineering domains, Nirmaan Hyperloop aimed to build a Globally recognizable Hyperloop pod.',
    header: (
      <Image
        src="https://utfs.io/f/O1Z0nCiJ5QIDAmY3JdOXSTZdweqp2MYV0BKDP9G1LmCtxf4n"
        alt="headset"
        className="flex flex-1 w-full h-full min-h-[6rem] object-cover"
        width={500} // Replace with the appropriate width
        height={300} // Replace with the appropriate height
      />
    ),
  },
];
