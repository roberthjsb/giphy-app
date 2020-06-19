const GetGif = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=rh14ApmNaRWVMOLMt2IC7QRKcUlGTAvg`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gif
};
export default GetGif;