import Page from '../components/page'
import Stories from '../components/stories'
import getStories from '../lib/get-stories'
import ReactWordcloud from 'react-wordcloud';

const words = [
    {
        text: 'told',
        value: 64,
    },
    {
        text: 'mistake',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
]

export default function Show({ stories }) {
    return (
        <Page>
            <ReactWordcloud words={words} />
        </Page>
    )
}
