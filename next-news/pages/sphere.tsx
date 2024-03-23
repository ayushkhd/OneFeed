import Page from '../components/page'
import { TagCloud } from 'react-tagcloud'

const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
]

const customRenderer = (tag, size, color) => {
    return (
        <span key={tag.value} style={{ color }} className={`tag-${size}`}>
            {tag.value}
        </span>
    )
}

export default function Sphere() {
    return (
        <Page>
            <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
            {/* <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
            /> */}
        </Page>
    )
}
