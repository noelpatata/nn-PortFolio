import {FC, memo, useState, useRef} from 'react';
import {MdExpandLess} from 'react-icons/md';
import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <MdExpandLess
        color="white"
        onClick={handleToggle}
        className="h-[25px] w-[25px] rounded-md bg-gradient-to-br from-black to-fuchsia-700 transition-all duration-300"
        style={{
          transform: isOpen ? 'rotate(0)' : 'rotate(-180deg)',
        }}
      />
      <div
        id="container"
        ref={containerRef}
        className="overflow-hidden mt-2 transition-all duration-300"
        style={{
          height: isOpen ? '100%' : '0px',
        }}>
        <div id="text" ref={textRef} className="">
          {content}
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
