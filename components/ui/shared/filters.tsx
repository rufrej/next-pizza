import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './sheckbox-filters-group';

interface Props {
 className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
 const ingredients = [
  {
   text: 'Сырный соус',
   value: '1',
  },
  {
   text: 'Моцарелла',
   value: '2',
  },
  {
   text: 'Чеснок',
   value: '3',
  },
  {
   text: 'Соленые огурчики',
   value: '4',
  },
  {
   text: 'Красный лук',
   value: '5',
  },
  {
   text: 'Томаты',
   value: '6',
  },
  {
   text: 'Бекон',
   value: '7',
  },
  {
   text: 'Перец',
   value: '8',
  },
  {
   text: 'Перец',
   value: '8',
  },
  {
   text: 'Перец',
   value: '8',
  },
  {
   text: 'Перец',
   value: '8',
  },
 ];

 return (
  <div className={className}>
   <Title
    text="Фильтрация"
    size="sm"
    className="mb-5 font-bold"
   />
   {/* Верхние чекбоксы */}
   <div className="flex flex-col gap-4">
    <FilterCheckbox
     text="Можно собирать"
     value="1"
    />
    <FilterCheckbox
     text="Новинка"
     value="2"
    />
   </div>
   {/* Фильтр цен */}
   <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
    <div className="flex gap-3 mb-5">
     <Input
      type="number"
      placeholder="0"
      min={0}
      max={30000}
      defaultValue={0}
     />
     <Input
      type="number"
      placeholder="35"
      min={0}
      max={35}
     />
    </div>

    <RangeSlider
     min={0}
     max={35}
     step={1}
     value={[0, 35]}
    />
   </div>

   {/* Фильтр ингридиентов */}

   <CheckboxFiltersGroup
    className="mt-5"
    title="Ингридиенты"
    limit={6}
    defaultItems={ingredients}
    items={ingredients}
   />
  </div>
 );
};
