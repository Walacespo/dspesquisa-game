import { Link } from "react-router-dom";


type Props = {
    link: string;
    linkTest: string;
}

function Filters({link, linkTest}: Props) {
    return (
        <div className='filters-container records-actions'>
            <Link to={link}>
                <button className='action-filters'>
                    {linkTest}
                </button>
            </Link>
        </div>
    );
}

export default Filters;
