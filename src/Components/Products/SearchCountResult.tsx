import React from 'react';
import UnopDropdown from 'unop-react-dropdown';

interface SortOption {
  id: string;
  label: string;
  value: string;
}

interface SearchCountResultProps {
  title?: string;
  onClick?: (sortType: string) => void;
}

const SearchCountResult: React.FC<SearchCountResultProps> = ({ 
  title = "400 نتيجة بحث", 
  onClick 
}) => {
  const sortOptions: SortOption[] = [
    { id: 'bestseller', label: 'الاكثر مبيعا', value: 'bestseller' },
    { id: 'highprice', label: 'الاعلى سعرا', value: 'highprice' },
    { id: 'lowprice', label: 'الاقل سعرا', value: 'lowprice' },
    { id: 'rate', label: 'الاعلى تقييما', value: 'rate' }
  ];

  const handler = (value: string) => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex">
        <UnopDropdown
          trigger={
            <p className="mx-1">
              <img
                className="ms-1"
                src="/images/sort.png"
                alt="sort"
                height="15px"
                width="15px"
              />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover>
          <div className="card-filter">
            {sortOptions.map((option) => (
              <div
                key={option.id}
                className="border-bottom card-filter-item"
                onClick={() => handler(option.value)}>
                {option.label}
              </div>
            ))}
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult; 