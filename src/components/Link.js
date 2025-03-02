import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

function Link({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation();

    const classes = classNames(
        'text-purple-500',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (evt) => {
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }
        evt.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;