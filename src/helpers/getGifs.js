export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FMh9LAQaPeV3hF1FFn6PzW2hzba37UOk`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_width_small.url
        }
    });
    
    return gifs;
}