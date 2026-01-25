import {
 Categories,
 Container,
 Filters,
 SortPopup,
 Title,
 TopBar,
} from '@/components/ui/shared';

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
    <div className="flex gap-15">
     {/* Фильтрация */}

     <Filters />
     <div className="flex-1">
      <div className="flex flex-col gap-16">Список товаров</div>
     </div>
    </div>
    {/* Список товаров */}
   </Container>
  </>
 );
}
