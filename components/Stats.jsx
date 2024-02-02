export const Stats = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-white xl:text-6xl">
            180KG
          </h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Pod Weight
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
            170+
          </h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Indiviual Parts
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
            40+
          </h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Team Members
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
            5+
          </h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Competitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
