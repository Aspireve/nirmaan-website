import { cn } from '../../utils/cn';

export const BentoGrid = ({ className, children }) => (
  <div
    className={cn(
      'grid md:auto-rows-[30rem] grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto', // Increased row size and gap
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
      'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 border border-transparent justify-between flex flex-col space-y-6', // Increased padding and spacing
      'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg',
      'hover:bg-white/10 hover:backdrop-blur-lg hover:shadow-2xl',
      className,
    )}
  >
    {header}
    <div className="group-hover/bento:translate-x-2 transition duration-200 flex-1">
      <div className="font-sans text-3xl font-bold text-neutral-600 dark:text-neutral-200 mb-3 mt-3"> {/* Increased text size */}
        {title}
      </div>
      <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300">
        {description}{description}
      </div>
    </div>
  </div>
);
