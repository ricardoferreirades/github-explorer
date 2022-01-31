import { Repository } from '@typings/Repository';
import './repository-item.scss';

interface RepositoryItemProps {
    repository: Repository;
}

export function RepositoryItem({repository} : RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Access repository</a>
        </li>
    )
}