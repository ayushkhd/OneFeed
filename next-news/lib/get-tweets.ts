export default async function getTweets() {
    const res = await fetch('http://127.0.0.1:5000/api/retrieve?top_k=4')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log('RESULT')
    console.log(res)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    // const json = {
    //     "0": {
    //         "avatar_url": "https://pbs.twimg.com/profile_images/1711185897415180288/lgwajQTW_normal.jpg",
    //         "content": "Are you dealing with impostor syndrome? Here are three signs to look for: https://t.co/No0W7eHiuV https://t.co/buHTyVJzkz",
    //         "handle": "Forbes",
    //         "id": "1771786543453094220",
    //         "retrieval_score": 0.8338501453399658,
    //         "timestamp": "Sat Nov 21 02:09:57 +0000 2009",
    //         "username": "Forbes"
    //     },
    //     "1": {
    //         "avatar_url": "https://pbs.twimg.com/profile_images/1711185897415180288/lgwajQTW_normal.jpg",
    //         "content": "Are you dealing with impostor syndrome? Here are three signs to look for: https://t.co/dRlcqUUtGg https://t.co/c7nEfPL5m3",
    //         "handle": "Forbes",
    //         "id": "1771451841227771998",
    //         "retrieval_score": 0.832545280456543,
    //         "timestamp": "Sat Nov 21 02:09:57 +0000 2009",
    //         "username": "Forbes"
    //     },
    //     "2": {
    //         "avatar_url": "https://pbs.twimg.com/profile_images/1518391475687493633/Bb6zQKr8_normal.jpg",
    //         "content": "Advanced modeling here. https://t.co/1Og1jItX69",
    //         "handle": "amasad",
    //         "id": "1771361201207095619",
    //         "retrieval_score": 0.8311523199081421,
    //         "timestamp": "Tue Jul 13 12:31:51 +0000 2010",
    //         "username": "Amjad Masad"
    //     },
    //     "3": {
    //         "avatar_url": "https://pbs.twimg.com/profile_images/1518391475687493633/Bb6zQKr8_normal.jpg",
    //         "content": "Corporate AI drama is accelerating faster than AI itself. https://t.co/QO3nceE8f3",
    //         "handle": "amasad",
    //         "id": "1771382779298848775",
    //         "retrieval_score": 0.8302334547042847,
    //         "timestamp": "Tue Jul 13 12:31:51 +0000 2010",
    //         "username": "Amjad Masad"
    //     }
    // };
    // return json;
    const result = res.json()
    return result
}
