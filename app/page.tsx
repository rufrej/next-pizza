import {
 Categories,
 Container,
 Filters,
 ProductsGroupList,
 SortPopup,
 Title,
 TopBar,
} from '@/components/ui/shared';
import { ProductCard } from '@/components/ui/shared/product-card';

const templates = [
 {
  id: 1,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 2,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 3,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 4,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 5,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 6,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 7,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 8,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 9,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
 {
  id: 10,
  name: 'Мега Мясная',
  imageUrl:
   'https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif',
  items: [{ price: 14.99 }],
 },
];

export default function Home() {
 return (
  <>
   {' '}
   <Container className="mt-10">
    <Title
     text="Все пиццы"
     size="lg"
     className="font-extrabold"
    />
   </Container>
   <TopBar />
   <Container className="mt-10 pb-14">
    <div className="flex gap-17">
     {/* Фильтрация */}

     <div className="w-[250]">
      <Filters />
     </div>
     {/* Список товаров */}
     <div className="flex-1">
      <div className="flex flex-col gap-16">
       <ProductsGroupList
        title="Пиццы"
        categoryId={1}
        items={templates}
       />
       <ProductsGroupList
        title="Завтрак"
        categoryId={2}
        items={templates}
       />
       {/* <ProductCard
        id={0}
        name="Мега Мясная"
        price={14.99}
        imageUrl="https://media.dodostatic.net/image/r:233x233/019ac63b1eac71a3b835bcec81294394.avif"
       /> */}
      </div>
     </div>
    </div>
   </Container>
  </>
 );
}
