import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(0);
  const handleItemClick = (index: number) => {
    setClickedIndex(index);
    console.log(hoveredIndex)
    console.log(clickedIndex)
  };
  return (
    <Section className="bg-black" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Some of my work</h2>
        <div className="flex overflow-hidden gap-4 h-[40lvh] sm:h-[30lvh]">
          {portfolioItems.map((item, index) => {
            const {title} = item;
            const isHovered = hoveredIndex === index;
            const isClicked = clickedIndex === index;
            return (
              <div 
              className={classNames(
                'rounded-xl opacity-50 bg-gradient-to-br from-black to-fuchsia-700 w-[5%] h-full transition-all duration-300 flex-[1] cursor-pointer',
                {
                  'hover:flex-[3]': !isClicked,
                  'flex-[3]': isClicked && isHovered,
                  'opacity-95': isHovered
                }
              )}
                key={`${title}-${index}`}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                  
              >
                {hoveredIndex !== index && (
                  <item.Icon
                  className="h-full w-full py-5 transition-opacity duration-300"
                  color="gray"
                    
                  />
                )}
                <ItemOverlay item={item} />
                
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, Icon}}) => {
  

  return (
    <a
      className={classNames(
        'h-full bg-gray-900 transition-all duration-300'
      )}
      href={url}
      rel='noopener noreferrer'
      target="_blank"
      >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain justify-center items-center">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-center text-xs text-white opacity-100 sm:text-sm">{description}</p>
          <Icon className="h-[100px] w-[100px] py-5" color='white'></Icon>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
