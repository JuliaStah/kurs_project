import Link from './Link';

function Sidebar() {
    const links = [
        {label: 'Диаграммы', path: "/diagrams"},
        {label: 'Таблицы', path: "/tables"},
        {label: 'Избранное', path: "/favourite"},
        {label: 'Мои загрузки', path: "/downloads"},
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-purple-500 pl-2"
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;