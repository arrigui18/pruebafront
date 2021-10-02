import axios from 'axios';

export const GamesGet = async() => {
    return await axios
        .get('https://api.twitch.tv/helix/games/top', {
            headers: {
                'Authorization': 'Bearer ln3jjziv21lme9h69kek48qr0pmaiv',
                'Client-Id': 'y3suqsv8504k0e5exdcrnlp11d99xk'
            }
        })
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}

export const GameStreamsGet = async(data) => {
    return await axios
        .get('https://api.twitch.tv/helix/streams', {
            params: {
                game_id: data
            },
            headers: {
                'Authorization': 'Bearer ln3jjziv21lme9h69kek48qr0pmaiv',
                'Client-Id': 'y3suqsv8504k0e5exdcrnlp11d99xk'
            }
        })
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}