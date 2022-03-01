import { useLocation } from 'react-router-dom';

export default function Header() {  

  const { pathname } = useLocation();

  const pageNameDictionary = {
    '/': 'Home',
    '/listings': 'Property Listings',
  };

  return (
    <header className="h-[103px] bg-neutral-100 flex flex-col justify-center sticky top-0 z-10">
      <h1 className="ml-14 lg:ml-9 text-2xl font-semibold">{pageNameDictionary[pathname] || 'Unnamed Page'}</h1>
    </header>
  );
}