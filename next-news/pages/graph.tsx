import Page from '../components/page'
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma';

let myGraph = {
    nodes: [
        { id: "n1", label: "Alice" },
        { id: "n2", label: "Rabbit" },
    ],
    edges: [
        { id: "e1", source: "n1", target: "n2", label: "SEES" }
    ],
};

export default function Graph() {
    return (
        <Page>
            <Sigma graph={myGraph} settings={{ drawEdges: true, clone: false }}>
                <RelativeSize initialSize={15} />
                <RandomizeNodePositions />
            </Sigma>
        </Page>
    )
}
