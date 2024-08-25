import { cn } from '../../utils/cn';

export const BentoGrid = ({ className, children }) => (
  <div
    className={cn(
      'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto',
      className,
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}) => (
  <div
    className={cn(
      'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border border-transparent justify-between flex flex-col space-y-4',
      'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg',
      'hover:bg-white/10 hover:backdrop-blur-lg hover:shadow-2xl',
      className,
    )}
  >
    {header}
    <div className="group-hover/bento:translate-x-2 transition duration-200 flex-1">
      <div className="font-sans text-2xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {title}
      </div>
      <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
    </div>
  </div>
);
