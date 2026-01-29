'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
 title: string;
 items: any[];
 className?: string;
 listClassName?: string;
 categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
 title,
 items,
 listClassName,
 categoryId,
 className,
}) => {
 const setCategoryId = useCategoryStore((state) => state.setActiveId);
 const intersectionRef = React.useRef(null!);
 const intersection = useIntersection(intersectionRef, {
  threshold: 0.4,
 });

 React.useEffect(() => {
  if (intersection?.isIntersecting) {
   setCategoryId(categoryId);
  }
 }, [categoryId, title, intersection?.isIntersecting]);

 return (
  <div
   ref={intersectionRef}
   className={className}
   id={title}
  >
   <Title
    text={title}
    size="lg"
    className="font-extrabold mb-5"
   />

   <div className={cn('grid grid-cols-3 gap-12.5', listClassName)}>
    {items
     //   .filter((product) => product.items.length > 0)
     .map((product) => (
      <ProductCard
       key={product.id}
       id={product.id}
       name={product.name}
       imageUrl={product.imageUrl}
       price={product.items[0].price}
      />
     ))}
   </div>
  </div>
 );
};
