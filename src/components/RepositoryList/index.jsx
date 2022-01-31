import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import './repository-list.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(response => setRepositories(response))
        .catch(console.error)
    }, []);

    return (
        <section>
            <h1>Repository List</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
            </ul>
        </section>
    )
}